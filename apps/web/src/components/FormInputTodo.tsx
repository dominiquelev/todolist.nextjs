'use client';

import { FormikErrors, FormikHandlers } from 'formik';
import { HTMLInputTypeAttribute } from 'react';
import { Input } from './ui/input';

interface FormInputTodoProps {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: string | number | Date;
  isError: boolean;

  error: string | FormikErrors<Date> | undefined;
}

const FormInputTodo: React.FC<FormInputTodoProps> = ({
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  isError,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={
          typeof value === 'string' || typeof value === 'number'
            ? value
            : value.toISOString()
        }
        className="rounded-md border"
      />
      {isError ? (
        <div className="text-xs text-red-500">
          {typeof error === 'string' ? error : JSON.stringify(error)}
        </div>
      ) : null}
    </div>
  );
};

export default FormInputTodo;
