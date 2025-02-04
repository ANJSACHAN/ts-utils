import React, { useState } from 'react';
import { TextField, ButtonProps, SelectProps, MultiSelectProps, DateTimeProps, ToggleProps , FieldType } from './type';


  
  export const validatePassword = ({ value, required, minLength, maxLength, regex }: {
    value: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
  }): string | undefined => {
    if (required && !value) return 'This field is required';
    if (minLength && value.length < minLength) return `Minimum length is ${minLength}`;
    if (maxLength && value.length > maxLength) return `Maximum length is ${maxLength}`;
    if (regex && !regex.test(value)) return 'Invalid format';
    return undefined;
  };
const TextInput: React.FC<TextField> = ({
  name,
  label,
  type = FieldType.TEXT,
  value,
  required = false,
  style,
  placeholder,
  error,
  onChange,
  minLength,
  maxLength,
  regex,
className = ""
}) => {
  const [inputError, setInputError] = useState<string | undefined>(error);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setInputError(
      validatePassword({
        value: newValue,
        required,
        minLength,
        maxLength,
        regex,
      }),
    );
  };
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        name={name}
        value={value as string}
        onChange={handleChange}
        style={style}
        required={required}
        placeholder={placeholder}
        className={`input-box ${className}`}
      />
      {inputError && <p className="error-message">{inputError}</p>}
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, style , className="" }) => (
  <button onClick={onClick} disabled={disabled} style={style} className={`button ${className}`}>
    {label}
  </button>
);

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    className = "",
    buttonClassName = "",
    dropdownClassName = "",
    optionClassName = "",
    style = {},
  buttonStyle = {},
  dropdownStyle = {},
  optionStyle = {},
  }) => {
    const [isOpen, setIsOpen] = useState(false);
  console.log(className , buttonClassName)
    return (
        <div className={`relative w-64 ${className}`} style={style}>
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left px-4 py-2 border rounded bg-white flex justify-between items-center ${buttonClassName}`}
          style={buttonStyle}
        >
          {value ? options.find((opt) => opt.value === value)?.label : placeholder}
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </button>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`absolute w-full mt-1 bg-white border rounded shadow-lg z-10 ${dropdownClassName}`}
            style={dropdownStyle}
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100 ${optionClassName}`}
                style={optionStyle}
              >
                <input type="radio" checked={value === option.value} readOnly className="mr-2" />
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  const MultiSelect: React.FC<MultiSelectProps> = ({
    options,
    selectedValues,
    onChange,
    placeholder = "Select options",
    className = "",
    buttonClassName = "",
    dropdownClassName = "",
    optionClassName = "",
    style = {},
    buttonStyle = {},
    dropdownStyle = {},
    optionStyle = {},
  }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSelection = (value: string) => {
      if (selectedValues.includes(value)) {
        onChange(selectedValues.filter((v) => v !== value)); // Remove if already selected
      } else {
        onChange([...selectedValues, value]); // Add new selection
      }
    };
  
    return (
      <div className={`relative w-64 ${className}`} style={style}>
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left px-4 py-2 border rounded bg-white flex justify-between items-center ${buttonClassName}`}
          style={buttonStyle}
        >
          {selectedValues.length > 0
            ? options
                .filter((opt) => selectedValues.includes(opt.value))
                .map((opt) => opt.label)
                .join(", ")
            : placeholder}
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </button>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`absolute w-full mt-1 bg-white border rounded shadow-lg z-10 ${dropdownClassName}`}
            style={dropdownStyle}
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelection(option.value)}
                className={`px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100 ${optionClassName}`}
                style={optionStyle}
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option.value)}
                  readOnly
                  className="mr-2"
                />
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      )}
  

      const DateTimePicker: React.FC<DateTimeProps> = ({
        value,
        onChange,
        className = "",
        style = {},
        inputClassName = "",
        inputStyle = {},
      }) => {
        return (
          <div className={` ${className} w-full`} style={style}>
            <input
              type="datetime-local"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`datetime-picker  border rounded  ${inputClassName}`}
              style={inputStyle}
            />
          </div>
        );
      };
      const Toggle: React.FC<ToggleProps> = ({
        checked,
        onChange,
        className = "",
        style = {},
        toggleClassName = "",
        toggleStyle = {},
        sliderClassName = "",
        sliderStyle = {},
      }) => {
        return (
          <label
            className={`relative inline-flex items-center cursor-pointer ${className}`}
            style={style}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}
              className="sr-only peer"
            />
            <div
              className={`w-14 h-7 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${toggleClassName}`}
              style={toggleStyle}
            ></div>
          </label>
        );
      };
      

export { TextInput, Button, Select, MultiSelect, DateTimePicker, Toggle };
