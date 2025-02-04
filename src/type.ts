export interface AlertProps {
  message: string;
  open: boolean;
  onClose: () => void;
  color: string;
  duration?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
}

// types.ts
export interface TextField {
  name: string;
  label?: string;
  type?: string;
  value: string;
  required?: boolean;
  style?: React.CSSProperties;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
className? : string
 
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className? : string
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  style?: React.CSSProperties 
  buttonStyle?: React.CSSProperties 
  dropdownStyle?: React.CSSProperties 
  optionStyle?: React.CSSProperties 
}

export interface MultiSelectProps {
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
}

export interface DateTimeProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}
export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  toggleClassName?: string;
  toggleStyle?: React.CSSProperties;
  sliderClassName?: string;
  sliderStyle?: React.CSSProperties;
}
