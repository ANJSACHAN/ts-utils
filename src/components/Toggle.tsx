import React from "react";
import { ToggleProps } from "../types/Component";

export const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  onChange,
  className = "",
  style = {},
  toggleClassName = "",
  toggleStyle = {},
  labelClassName= "",
  labelStyle 
}) => {
  return (
    <div className={`flex flex-col flex-1 min-w-0 ${className}`} style={style}>
      {label && <label  className={`block text-sm font-medium text-gray-700 mb-1  ${labelClassName}`} style={labelStyle}>{label}</label>}
      <label
        className={`relative inline-flex items-center cursor-pointer`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div
          className={`w-14 h-7 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-gray-300 peer-focus:ring-1  rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${toggleClassName}`}
          style={toggleStyle}
        ></div>
      </label>
    </div>
  );
};
