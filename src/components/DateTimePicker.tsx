import React from "react";
import { DateTimeProps } from "../types/Component";

export const DateTimePicker: React.FC<DateTimeProps> = ({
  label,
  value,
  onChange,
  className = "",
  style = {},
  inputClassName = "",
  inputStyle = {},
  labelClassName = "",
  labelStyle,
}) => {
  return (
    <div className={`flex flex-col flex-1 min-w-0 ${className}`} style={style}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`} style={labelStyle}>
          {label}
        </label>
      )}
      <input
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`"w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm transition duration-150 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-500 hover:ring-2 hover:ring-blue-200 outline-none ${inputClassName}`}
        style={inputStyle}
      />
    </div>
  );
};
