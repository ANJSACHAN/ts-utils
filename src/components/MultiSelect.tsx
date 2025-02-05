import React, { useState, useRef, useEffect } from "react";
import { MultiSelectProps } from "../types/Component";

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  placeholder = "Select options",
  className = "",
  style = {},
  buttonClassName = "",
  dropdownClassName = "",
  optionClassName = "",
  MultiSelectButtonStyle = {},
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

  const handleSelection = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value)); // Remove if already selected
    } else {
      onChange([...selectedValues, value]); // Add new selection
    }
  };

  return (
    <div className={`flex flex-col flex-1 min-w-0 ${className}`} style={style} ref={dropdownRef}>
      {label && <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`} style={labelStyle}>{label}</label>}
      
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` w-full  py-2.5 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${buttonClassName}`}
        style={MultiSelectButtonStyle}
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
          className={`mt-2 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg ${dropdownClassName}`}
          style={dropdownStyle}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelection(option.value)}
              className={`px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer ${optionClassName}`}
              style={optionStyle}
            >
              <input
                type="radio"
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
  );
};
