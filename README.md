# UI Widgets Kit

**UI Widgets Kit** is a collection of reusable, customizable React UI components designed for modern web applications. The components come with Tailwind CSS styling by default, allowing you to easily customize them using Tailwind or custom CSS.
## 🚀 Installation
```sh
npm install ui-widgets-kit
```

or

```sh
yarn add ui-widgets-kit
```

---

## Components
### 1️⃣ Alert Component
Displays an alert message with customizable colors, duration, and position.

#### Props:
```ts
interface AlertProps {
    message: string;
    open: boolean;
    onClose: () => void;
    color: string;
    duration?: number;
    textColor?: string;
    iconColor?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
}
```

---

### 2️⃣ TextField Component
A customizable text input field with validation options.

#### Props:
```ts
interface TextField {
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
```

---

### 3️⃣ Button Component
A customizable button with different styles and click handlers.

#### Props:
```ts
interface ButtonProps {
    label: string | React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
```

---

### 4️⃣ Select Component
A dropdown select component with styling options.

#### Props:
```ts
interface Option {
    value: string;
    label: string;
}

interface SelectProps {
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
```

---

### 5️⃣ Multi-Select Component
A component for selecting multiple options from a dropdown list.

#### Props:
```ts
interface MultiSelectProps {
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
```

---

### 6️⃣ DateTime Component
A date-time input field with custom styling support.

#### Props:
```ts
interface DateTimeProps {
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
```

---

### 7️⃣ Toggle Component
A toggle switch for boolean values.

#### Props:
```ts
interface ToggleProps {
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
```

---

### 8️⃣ Filter Component
A comprehensive filtering system that supports text input, select dropdowns, multi-select, and date-time range filters.

#### Props:
```ts
interface FilterOption {
    value: string;
    label: string;
}

interface FilterField {
    name: string;
    label: string;
    type: "text" | "select" | "multi-select" | "datetime-range";
    options?: FilterOption[];
    placeholder?: string;
    defaultValue?: any;
}

interface FilterSchema extends FilterField {
    className?: string;
    buttonClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;
    style?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    inputClassName?: string;
    inputStyle?: React.CSSProperties;
    toggleClassName?: string;
    toggleStyle?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    required?: boolean;
    error?: string;
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
}

interface FilterComponentProps {
    filterSchema: FilterSchema[];
    filters: Record<string, any>;
    setFilters: (filters: Record<string, any>) => void;
    handleApply: () => void;
    handleResetFilters: () => void;
    showFilterCount?: boolean;
}
```

---

## Usage Example
```tsx
import { Alert, TextField, Button, Select, MultiSelect, DateTime, Toggle, FilterComponent } from "ui-widgets-kit";

const App = () => {
    return (
        <TextField
            name="username"
            label="Username"
            value=""
            onChange={(val) => console.log(val)}
        />
    );
};
```

---

## License
This project is licensed under the MIT License.

---

## Contributing
Feel free to submit issues or pull requests to enhance this package.

---

## Contact
For any questions or feedback, reach out to `theanjalisachan@gmail.com`.

