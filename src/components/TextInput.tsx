import React, { useState } from "react";
import { TextField } from "../types/Component";

export const validateInputText = ({
  value,
  required,
  minLength,
  maxLength,
  regex,
}: {
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
}): string | undefined => {
  if (required && !value) return "This field is required";
  if (minLength && value.length < minLength)
    return `Minimum length is ${minLength}`;
  if (maxLength && value.length > maxLength)
    return `Maximum length is ${maxLength}`;
  if (regex && !regex.test(value)) return "Invalid format";
  
  return undefined;
};

export const TextInput: React.FC<TextField> = ({
  name,
  label,
  type = "text",
  value,
  required = false,
  style,
  placeholder,
  error,
  onChange,
  minLength,
  maxLength,
  regex,
  className = "",
  inputClassName = "",
  inputStyle,
  labelClassName = "",
  labelStyle,
}) => {

  const [inputValue, setInputValue] = useState<string>(value);
  const [inputError, setInputError] = useState<string | undefined>(error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const validationError = validateInputText({
      value: newValue,
      required,
      minLength,
      maxLength,
      regex,
    });

    if (!validationError) {
      setInputValue(newValue); // Update only if valid
      onChange(newValue); // Notify parent
    }
    setInputError(validationError);
  };

  return (
    <div
      className={`flex flex-col flex-1 min-w-0 ${className}`}
      style={style}
    >
      {label && (
        <label
          className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}
          style={labelStyle}
        >
          {label}
        </label>
      )}
     <input
  type={type}
  name={name}
  value={value as string}
  onChange={handleChange}
  style={inputStyle}
  required={required}
  placeholder={placeholder}
  className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm transition duration-150 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500 hover:ring-2 hover:ring-blue-200 outline-none ${inputClassName}`}
/>


      {inputError && <p className="text-red-500 text-sm">{inputError}</p>}
    </div>
  );
};
