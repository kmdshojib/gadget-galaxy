"use client";

import React, { useState } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string | boolean;
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
          className={`block w-full p-4 pt-6 font-light bg-white border-2 outline-none transition ${
            errors[id] ? "border-rose-500" : "border-neutral-300"
          }`}
        >
          {fileName}
          <input
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            type="file"
            className="hidden"
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
