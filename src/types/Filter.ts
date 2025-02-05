export interface FilterOption {
  value: string;
  label: string;
}


export interface FilterField {
  name: string;
  label: string;
  type: "text" | "select" | "multi-select" | "datetime-range";
  options?: FilterOption[];
  placeholder?: string;
  defaultValue?: any;
}


export interface FilterSchema {
  name: string;
  label: string;
  type: string;
  options?: FilterOption[];
  placeholder?: string;
  defaultValue?: any;
  name1?: string;
  name2?: string;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  SelectButtonStyle?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  toggleClassName?: string;
  toggleStyle?: React.CSSProperties;
  labelClassName? : string;
  labelStyle? : React.CSSProperties
  required?: boolean;
  error?: string;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
}

export interface FilterContainerStyles {
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    drawerClassName?: string;
    drawerStyle?: React.CSSProperties;
    drawerHeaderClassName?: string;
    drawerHeaderStyle?: React.CSSProperties;
    drawerContentClassName?: string;
    drawerContentStyle?: React.CSSProperties;
    drawerFooterClassName?: string;
    drawerFooterStyle?: React.CSSProperties;
    overlayClassName?: string;
    overlayStyle?: React.CSSProperties;
    drawerTitleClassName? : "",
    drawerTitleStyle? : React.CSSProperties;
    filterButtonClassName?: string;
    filterButtonStyle?: React.CSSProperties;
    applyButtonClassName?: string;
    applyButtonStyle?: React.CSSProperties;
    resetButtonClassName?: string;
    resetButtonStyle?: React.CSSProperties;
    closeButtonClassName?: string;
    closeButtonStyle?: React.CSSProperties;
   
  }

interface FilterLabels {
    filterButtonLabel?: string | React.ReactNode;
    resetButtonLabel?: string | React.ReactNode;
    applyButtonLabel?: string | React.ReactNode;
    closeButtonLabel?: string | React.ReactNode;
    drawerTitle?: string | React.ReactNode;
  }


export interface FilterComponentProps extends FilterContainerStyles, FilterLabels {
    filterSchema: FilterSchema[];
    filters: Record<string, any>;
    setFilters: (filters: Record<string, any>) => void;
    handleApply: () => void;
    handleResetFilters: () => void;
    showFilterCount?: boolean;
  }
