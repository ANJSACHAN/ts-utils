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
    className?: string;
    inputClassName?: string;
    inputStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
export interface ButtonProps {
    label: string | React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
export interface Option {
    value: string;
    label: string;
}
export interface SelectProps {
    label?: string;
    options: Option[];
    value: string | null;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    buttonClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;
    SelectButtonStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    optionStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
export interface MultiSelectProps {
    label?: string;
    options: Option[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    buttonClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;
    MultiSelectButtonStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    optionStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
export interface DateTimeProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
    inputClassName?: string;
    inputStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
export interface ToggleProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    toggleClassName?: string;
    toggleStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
}
