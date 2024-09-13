import { FormikProps } from 'formik';
import React from 'react';
import { getFieldErrors } from '@/utils/formik';

type Props = {
  label?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  autoFocus?: boolean;
};

const TextField = ({
  label,
  name,
  type,
  formik,
  onChange,
  placeholder,
  className,
  autoFocus,
}: Props) => {
  const { error, helperText } = getFieldErrors(formik, name);

  return (
    <div className="relative">
      {label ? (
        <label htmlFor={name} className="mb-2 block font-medium text-body-color dark:text-white">
          {label}
        </label>
      ) : null}
      <input
        type={type ?? 'text'}
        autoFocus={autoFocus}
        id={name}
        className={`w-full rounded-md border border-[#E9EDF4] bg-transparent bg-white px-5 py-3 text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white ${className || ''.trim()}`}
        placeholder={placeholder}
        autoComplete="off"
        {...formik.getFieldProps(name)}
        onChange={(e) => (onChange ? onChange(e) : formik.handleChange(e))}
      />
      {error ? (
        <label className="block pl-2 text-sm text-red dark:text-white">{helperText}</label>
      ) : null}
    </div>
  );
};

export default TextField;
