"use client";
import React from "react";
import Input from "../Components/Common/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Components/Common/Button";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[360px] md:w-[450px] p-6 rounded-md sm:p-10 bg-gray-50 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm font-light text-neutral-500">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-12">
          <div className="space-y-4">
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
              <div className="flex justify-between mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                  data-abc="true"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                label="Password"
                type="password"
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <Button label="Sign In" buttonType="submit" />
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don&apos;t have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline font-light text-neutral-500"
                data-abc="true"
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
