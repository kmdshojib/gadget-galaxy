"use client";
import React, { useState } from "react";
import Input from "../Components/Common/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Components/Common/Button";
import Link from "next/link";
import { useRegisterUserMutation } from "@/redux/Services/authService";
import { toast } from "react-toastify";
import Spinner from "../Components/Common/Spinner";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [resgisterUser, { isLoading }] = useRegisterUserMutation();
  const router = useRouter();
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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("role", data.role);

    try {
      const result = await resgisterUser(formData);
      if ("data" in result) {
        toast.success("User Successfully registered");
        router.push("/signin");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[360px] md:w-[620px] p-6 rounded-md sm:p-10 bg-gray-50 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm font-light text-neutral-500">
              Please create an account and register!
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
                  label="Full Name"
                  type="text"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div>
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div>
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  register={register}
                  errors={errors}
                  required
                />
              </div>

              <div>
                <div className="w-full relative">
                  <select
                    id="role"
                    {...register("role", { required: true })}
                    className={`peer w-full p-4 pt-6 font-light bg-white border-2 outline-none appearance-none transition ${
                      errors.role ? "border-rose-500" : "border-neutral-300"
                    }
                    ${errors.role ? "focus:border-rose-500" : "focus:border-black"}`}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                  <label
                    htmlFor="userType"
                    className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4`}
                  >
                    Choose Account Type:
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
                  <Button label="Register" buttonType="submit" />
                </div>
              </div>
              <p className="px-6 text-sm text-center text-gray-600">
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
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
