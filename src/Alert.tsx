import React, { useState, useEffect } from "react";
import { AlertProps } from "./types/Alert";

export const Alert: React.FC<AlertProps> = ({
  message,
  open,
  color,
  duration = 5000,
  position = "top-center",
  onClose,
  textColor="white",
  iconColor="red"
}) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.(); 
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!visible) return null;

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div
    style={{ backgroundColor: color, color: textColor }}

      className={`fixed ${positionClasses[position]} p-4 text-white rounded shadow-lg z-50`}
    >
      {message}
      <button style={{color : iconColor}} className="ml-4  font-bold" onClick={() => setVisible(false)}>x</button>
    </div>
  );
};

