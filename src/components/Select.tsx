import React, { useState, useRef, useEffect } from "react";
import { SelectProps } from "../types/Component";

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  style = {},
  buttonClassName = "",
  dropdownClassName = "",
  optionClassName = "",
  SelectButtonStyle = {},
  dropdownStyle = {},
  optionStyle = {},
  labelClassName = "",
  labelStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex flex-col flex-1 min-w-0 ${className}`} style={style} ref={dropdownRef}>
      {label && <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`} style={labelStyle}>{label}</label>}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full  py-2.5 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${buttonClassName}`}
        style={SelectButtonStyle}
      >
        {value ? options.find((opt) => opt.value === value)?.label : placeholder}
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div
          className={`mt-2 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg ${dropdownClassName}`}
          style={dropdownStyle}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer ${optionClassName}`}
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
