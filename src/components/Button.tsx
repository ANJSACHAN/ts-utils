import React, { useState } from "react";
import { ButtonProps } from "../types/Component";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  style,
  className = "",
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={style}
    className={`button ${className}`}
  >
    {label}
  </button>
);
