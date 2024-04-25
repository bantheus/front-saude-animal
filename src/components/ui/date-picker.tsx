"use client";

import { ptBR } from "date-fns/locale";
import { LegacyRef, forwardRef } from "react";
import _DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import { twMerge } from "tailwind-merge";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

interface InputProps extends ReactDatePickerProps {
  error?: boolean;
  errorMessage?: string;
}

function DatePicker(
  { className, error, errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) {
  const datePickerClassName = twMerge(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    error ? "border-red-500" : "",
    className,
  );

  return (
    <div className="flex w-full flex-col">
      <_DatePicker
        dateFormat="dd/MM/yyyy"
        locale="pt-BR"
        wrapperClassName="w-full"
        className={datePickerClassName}
        enableTabLoop={false}
        {...props}
      />
      {error && errorMessage && (
        <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default forwardRef(DatePicker);
