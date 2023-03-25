import { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

import { Container, Error } from "./styles";

interface InputProps {
  id: string;
  label?: string;
  type: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  placeholder?: string;
  autoComplete?: string;
}

export const Input = forwardRef(
  (
    {
      id,
      label,
      error,
      type,
      autoComplete,
      placeholder,
      ...register
    }: InputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <>
      <label htmlFor={id}>{label}</label>
      <Container>
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          ref={ref}
        />

        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error.message.toString()}</span>
          </Error>
        )}
      </Container>
    </>
  )
);
