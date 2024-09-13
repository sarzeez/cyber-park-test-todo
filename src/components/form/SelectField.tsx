import React from 'react';
import { getFieldErrors } from '@/utils/formik';
import { Node } from '@/types/node';
import { LargeSelectIcon } from '@/assets/icons';
import { FormikProps } from 'formik';

type Props = {
  label?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  options: Node[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  autoFocus?: boolean;
  placeholder?: string;
};

const SelectField = ({
  label,
  name,
  formik,
  options,
  onChange,
  className,
  autoFocus,
  placeholder,
}: Props) => {
  const hasValue = !!formik?.values[name];
  const { error, helperText } = getFieldErrors(formik, name);

  return (
    <div className="relative">
      {label ? (
        <label
          htmlFor={name}
          className="text-content-primary mb-2 block font-medium dark:text-white"
        >
          {label}
        </label>
      ) : null}
      <div className="relative w-full bg-white">
        <select
          autoFocus={autoFocus}
          id={name}
          className={`select-field ${
            hasValue ? 'text-body-color' : ''.trim()
          } ${className || ''.trim()}`}
          autoComplete="off"
          {...formik?.getFieldProps(name)}
          onChange={(e) => (onChange ? onChange(e) : formik.handleChange(e))}
        >
          <option value="" className="dark:bg-dark-2">
            {placeholder || 'Tanlang'}
          </option>
          {options.map((item) => (
            <option key={item.id} value={item.id} className="dark:bg-dark-2">
              {item.title}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <LargeSelectIcon />
        </span>
      </div>
      {error ? (
        <label className="text-red-primary text-body-small block pl-2 dark:text-white">
          {helperText}
        </label>
      ) : null}
    </div>
  );
};

export default SelectField;
