"use client";

import { FieldValues, useForm } from "react-hook-form";
import Button from "../Components/Common/Button";
import { useAppSelector } from "../Hooks/useRedux";

import { useState } from "react";
import Input from "../Components/Common/Input";
import Link from "next/link";

const AddProduct: React.FC = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const { user } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      image: "",
    },
  });
  const onSubmit = () => {};
  if (user?.role !== "seller") {
    return <div>404 not found!</div>;
  }
  return (
    <div className="flex items-center justify-center">
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
                id="laptoName"
                label="Lapto Name"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>

            <div>
              <Input
                id="Price"
                label="Price"
                type="number"
                register={register}
                errors={errors}
                required
              />
            </div>

            <div>
              <div className="w-full relative">
                <select
                  id="laptopCategory"
                  {...register("role", { required: true })}
                  className={`peer w-full p-4 pt-6 font-light bg-white border-2 outline-none appearance-none transition`}
                >
                  <option value="buyer">Gaming</option>
                  <option value="seller">Seller</option>
                </select>
                <label
                  htmlFor="userType"
                  className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4`}
                >
                  Choose Category:
                </label>
              </div>
            </div>
            <div>
              <Input
                id="image"
                label="Choose Profile Photo"
                type="file"
                register={register}
                errors={errors}
                fileName={fileNames}
                setFileName={setFileNames}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <div className="w-[250px]">
                <Button label="Add" buttonType="submit" />
              </div>
            </div>
            {/* <p className="px-6 text-sm text-center text-gray-600">
              Have an account yet?
              <Link
                rel="noopener noreferrer"
                href="/signin"
                className="hover:underline font-light text-neutral-500"
                data-abc="true"
              >
                SignIn
              </Link>
              .
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
