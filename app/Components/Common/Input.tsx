"use client";

import React, { useState } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label?: string | boolean;
  type: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  fileName?: string[];
  multiple?: boolean;
  setFileName?: (fileName: string[]) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  register,
  errors,
  disabled,
  required,
  fileName,
  multiple,
  value,
}) => {
  const isFileType = type === "file";

  return (
    <div className="w-full relative">
      {isFileType ? (
        <label
          htmlFor={id}
          className={`mb-2 text-md inline-block text-neutral-700 dark:text-neutral-200 ${
             errors[id] ? "border-rose-500" : "border-neutral-300"
            }`}
          // className={`block w-full p-4 pt-6 font-light bg-white border-2 outline-none transition ${
          //   errors[id] ? "border-rose-500" : "border-neutral-300"
          // }`}
        >
        {fileName}
          <input
            id={id}
            placeholder="Choose Image"
            disabled={disabled}
            {...register(id, { required })}
            type="file"
            className=" relative m-0 block w-full min-w-0 flex-auto font-light rounded outline-none  border-2  bg-white px-3 py-[0.32rem] text-base  text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-rose-500 dark:file:text-neutral-100 dark:focus:border-primary"
            hidden
            multiple={multiple}
          />
        </label>
      ) : (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=" "
          type={type}
          value={value}
          className={`
                peer
                w-full
                p-4
                pt-6
                font-light
                bg-white
                border-2
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${errors[id] ? "border-rose-500" : "border-neutral-300"}
                ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
                `}
        />
      )}
      <label
        className={`
                absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-5
                origin-[0]
                left-4
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:-translate-y-4
                ${errors[id] ? "text-rose-500" : "text-zinc-400"}
            `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
