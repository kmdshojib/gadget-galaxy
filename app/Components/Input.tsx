"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  register,
  errors,
  disabled,
  required,
}) => {
  return (
    <div className="w-full">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
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
      <label
        className={`
                absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-5
                z-10
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
