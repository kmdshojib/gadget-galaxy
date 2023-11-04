"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Components/Common/Button";
import { useAppSelector } from "../Hooks/useRedux";

import { useState } from "react";
import Input from "../Components/Common/Input";
import { useAddProductMutation } from "@/redux/Services/productService";
import Spinner from "../Components/Common/Spinner";
import { toast } from "react-toastify";
import ErrorPage from "../Components/Common/Errorpage";
import { useRouter } from "next/navigation";

const AddProduct: React.FC = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const { user } = useAppSelector((state) => state.auth);
  const [addProduct, { isLoading }] = useAddProductMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: user?.email,
      category: "",
      price: "",
      image: "",
      quantity: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("image", data.image[1]);
    formData.append("laptopName", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("sellerEmail", data.email);
    formData.append("quantity", data.quantity);

    try {
      const result = addProduct(formData);
      if ("message" in result) {
        toast.success("Product added successfully!");
        router.push("/seller/dashboard")
      }
    } catch (err) {
      err && toast.error("something went wrong");
    }
  };
  if (user?.role !== "seller") {
    return <ErrorPage />;
  }

  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col w-[360px] md:w-[620px] p-6 rounded-md sm:p-10 bg-gray-50 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Add your Product!</h1>
            <p className="text-sm font-light text-neutral-500">
              Please add to your Product!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="space-y-12"
          >
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 md:gap-3">
              <div className="md:mt-4">
                <Input
                  id="name"
                  label="Lapto Name"
                  type="text"
                  register={register}
                  errors={errors}
                  required
                />
              </div>

              <div>
                <Input
                  id="price"
                  label="Price"
                  type="number"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div>
                <Input
                  id="quantity"
                  label="Quantity"
                  type="number"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div>
                <Input
                  id="email"
                  label="Serller Email"
                  type="email"
                  register={register}
                  errors={errors}
                  value={`${user?.email}`}
                  required
                />
              </div>

              <div>
                <div className="w-full relative">
                  <select
                    id="laptopCategory"
                    {...register("category", { required: true })}
                    className={`peer w-full p-4 pt-6 font-light bg-white border-2 transition${
                      errors.category ? "border-rose-500" : "border-neutral-300"
                    }
                ${
                  errors.category
                    ? "focus:border-rose-500"
                    : "focus:border-black"
                }`}
                  >
                    <option value="apple">Apple</option>
                    <option value="gaming">Gaming</option>
                    <option value="ultrabook">Ultra Book</option>
                  </select>
                  <label
                    htmlFor="userType"
                    className={`absolute text-md duration-150 transform -translate-y-3 top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4`}
                  >
                    Choose Category:
                  </label>
                </div>
              </div>
              <div>
                <span className="text-rose-500 text-xs font-bold">
                  Note: You Can only Upload two Images!
                </span>
                <Input
                  id="image"
                  // label="Choose Image for Your Laptop!"
                  type="file"
                  register={register}
                  errors={errors}
                  fileName={fileNames}
                  setFileName={setFileNames}
                  required
                  multiple={true}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center items-center">
                <div className="w-[250px]">
                  <Button label="Add" buttonType="submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
