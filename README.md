# UI Widgets Kit

**UI Widgets Kit** is a collection of reusable, customizable React UI components designed for modern web applications. It comes with Tailwind CSS by default, ensuring a sleek, responsive, and highly customizable design system out of the box.

## 🚀 Installation
```sh
npm install ui-widgets-kit
```

or

```sh
yarn add ui-widgets-kit
```
---

## Usage Example

### Example 1 :  Form Elements
```tsx
import React, { useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  DateTimePicker,
  Toggle,
  Alert,
} from "ui-widgets-kit";

const Example = () => {
  const [form, setForm] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertColor, setAlertColor] = useState("green");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const multiSelectOptions = [
    { value: "multi1", label: "Multi 1" },
    { value: "multi2", label: "Multi 2" },
  ];

  const handleSubmit = () => {
    console.log("Form data : ", form);
    setAlert(true);
    setAlertMsg("Form submitted successfully");
    setAlertColor("green");
  };

  return (
    <div
      className="h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-6"
    >
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Component Library Test
        </h1>
        <TextInput
          name="text"
          label="Text Input"
          type="text"
          value={form.text || ""}
          onChange={(val) => setForm({ ...form, text: val })}
          placeholder="Enter text"
          style={{ marginBottom: "20px" }}
        />
        <Select
          label="Single Select"
          options={options}
          value={form["single-select"] || ""}
          onChange={(val) => setForm({ ...form, "single-select": val })}
          placeholder="Choose a category"
          style={{ marginBottom: "20px" }}
        />
        <MultiSelect
          label="Multi Select"
          options={multiSelectOptions}
          selectedValues={form["multi-select"] || []}
          onChange={(vals) => setForm({ ...form, "multi-select": vals })}
          placeholder="Select multiple"
          style={{ marginBottom: "20px" }}
        />
        <DateTimePicker
          label="Select Date"
          value={form.date || ""}
          onChange={(val) => setForm({ ...form, date: val })}
          style={{ marginBottom: "20px" }}
        />
        <Toggle
          label="Toggle Option"
          checked={form.toggle || false}
          onChange={(val) => setForm({ ...form, toggle: val })}
          style={{ marginBottom: "20px" }}
        />
        <div className="flex justify-center">
          <Button
            label="Submit"
            onClick={() => handleSubmit()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </div>
      </div>
      <Alert
        open={alert}
        onClose={() => setAlert(false)}
        message={alertMsg}
        color={alertColor}
        iconColor="red"
      />
    </div>
  );
};

export default Example;
```
### Result 

![image](https://github.com/user-attachments/assets/f33f8732-e73e-4e6b-90d5-512aa5b7e45b)

---

### Example 2 : FilterComponent

```tsx
import React, { useState } from "react";
import { FilterComponent, Alert } from "ui-widgets-kit";

const Example = () => {
  const filterSchema = [
    {
      name: "text",
      label: "Text Input",
      type: "text",
      placeholder: "Search Text...",
    },
    {
      name: "number",
      label: "Number Input",
      type: "number",
      placeholder: "Search Number...",
    },
    {
      name: "toggle",
      label: "Toggle Button",
      type: "toggle",
      labelClassName: "mb-2",
    },
    {
      name: "single-select",
      label: "Single Select",
      type: "select",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },

    {
      name: "multi-select",
      label: "Multiple Select",
      type: "multi-select",
      options: [
        { value: "electronics", label: "Electronics & Gadgets" },
        { value: "fashion", label: "Clothing & Fashion" },
        { value: "home_appliances", label: "Home Appliances" },
        { value: "books", label: "Books & Literature" },
        { value: "fitness", label: "Fitness & Wellness" },
        { value: "gaming", label: "Gaming & Consoles" },
        { value: "beauty", label: "Beauty & Personal Care" },
        { value: "automobile", label: "Automobiles & Accessories" },
        { value: "food", label: "Food & Beverages" },
        { value: "toys", label: "Toys & Kids' Products" },
        { value: "music", label: "Music & Instruments" },
        { value: "pet_supplies", label: "Pet Supplies" },
        { value: "gardening", label: "Gardening & Outdoors" },
        { value: "furniture", label: "Furniture & Decor" },
      ],
    },
    {
      name: "dateRange",
      label: "Date Range",
      type: "datetime-range",
      name1: "startDate",
      name2: "endDate",
    },
    {
      name: "date",
      label: "Date Time",
      type: "datetime",
    },
  ];

  const [filters, setFilters] = useState({});

  const handleApply = () => {
    console.log(filters);
    setAlert(true);
    setAlertMsg("Filters are applied");
    setAlertColor("green");
  };

  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertColor, setAlertColor] = useState("");
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500   p-6">
      <h1>Filter Component</h1>

      <FilterComponent
        filterSchema={filterSchema}
        filters={filters}
        setFilters={setFilters}
        handleApply={() => handleApply()}
        handleResetFilters={() => setFilters({})}
      />

      <Alert
        open={alert}
        onClose={() => setAlert(false)}
        message={alertMsg}
        color={alertColor}
        iconColor="red"
      />
    </div>
  );
};

export default Example;
```

### Result

![image](https://github.com/user-attachments/assets/e3ce8df5-c4f4-482f-bff2-a8cf75125575)

---

## Components
### 1️⃣ Alert Component
Displays an alert message with customizable colors, duration, and position.

#### Props:

| Prop       | Type                                                                 | Description |
|------------|----------------------------------------------------------------------|-------------|
| `message`  | `string`                                                             | The text message displayed in the alert. |
| `open`     | `boolean`                                                            | Controls the visibility of the alert (`true` = visible, `false` = hidden`). |
| `onClose`  | `() => void`                                                         | Callback function triggered when the alert is closed. |
| `color`    | `string`                                                             | Defines the background color of the alert (e.g., `"red"`, `"blue"`, `"green"`). |
| `duration` | `number` _(optional)_                                                | Time in milliseconds before the alert auto-closes. If not provided, it remains open until manually closed. |
| `textColor`| `string` _(optional)_                                                | Sets the text color of the alert. Defaults to a contrasting color based on `color`. |
| `iconColor`| `string` _(optional)_                                                | Defines the color of the alert icon. Defaults to a suitable contrast based on `color`. |
| `position` | `"top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "top-center" \| "bottom-center"` _(optional)_ | Determines where the alert appears on the screen. Defaults to `"top-right"`. |


---

### 2️⃣ TextField Component
A customizable text input field with validation options.

#### Props:

| Prop             | Type                         | Description |
|-----------------|-----------------------------|-------------|
| `name`          | `string`                     | The name of the text input field (used for form handling). |
| `label`         | `string` _(optional)_        | The label text for the input field. |
| `type`          | `string` _(optional)_        | The type of input (`"text"`, `"password"`, `"email"`, etc.). Defaults to `"text"`. |
| `value`         | `string`                     | The current value of the text input. |
| `required`      | `boolean` _(optional)_       | Whether the field is required. Defaults to `false`. |
| `style`         | `React.CSSProperties` _(optional)_ | Custom inline styles for the wrapper element. |
| `placeholder`   | `string` _(optional)_        | Placeholder text inside the input field. |
| `error`         | `string` _(optional)_        | Error message displayed when validation fails. |
| `onChange`      | `(value: string) => void`    | Function triggered when the input value changes. |
| `minLength`     | `number` _(optional)_        | Minimum number of characters allowed. |
| `maxLength`     | `number` _(optional)_        | Maximum number of characters allowed. |
| `regex`         | `RegExp` _(optional)_        | Regular expression pattern for input validation. |
| `className`     | `string` _(optional)_        | Additional classes for the wrapper element. |
| `inputClassName`| `string` _(optional)_        | Additional classes for the input field. |
| `inputStyle`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the input field. |
| `labelClassName`| `string` _(optional)_        | Additional classes for the label element. |
| `labelStyle`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the label element. |


---

### 3️⃣ Button Component
A customizable button with different styles and click handlers.

#### Props:

| Prop        | Type                           | Description |
|------------|--------------------------------|-------------|
| `label`    | `string \| React.ReactNode`   | The text or custom React node displayed inside the button. |
| `onClick`  | `() => void`                  | Function triggered when the button is clicked. |
| `disabled` | `boolean` _(optional)_        | Disables the button when `true`. Defaults to `false`. |
| `style`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the button. |
| `className`| `string` _(optional)_         | Additional classes for styling the button. |


---

### 4️⃣ Select Component
A dropdown select component with styling options.

#### Props:

| Prop               | Type                             | Description |
|--------------------|--------------------------------|-------------|
| `label`           | `string` _(optional)_         | The label text for the select dropdown. |
| `options`         | `Option[]`                    | An array of options to display in the dropdown. |
| `value`           | `string \| null`              | The currently selected value. |
| `onChange`        | `(value: string) => void`     | Function triggered when an option is selected. |
| `placeholder`     | `string` _(optional)_         | Placeholder text displayed when no option is selected. |
| `className`       | `string` _(optional)_         | Additional classes for the select component wrapper. |
| `style`           | `React.CSSProperties` _(optional)_ | Custom inline styles for the select component wrapper. |
| `buttonClassName` | `string` _(optional)_         | Additional classes for the select button. |
| `dropdownClassName` | `string` _(optional)_       | Additional classes for the dropdown menu. |
| `optionClassName` | `string` _(optional)_         | Additional classes for each dropdown option. |
| `SelectButtonStyle` | `React.CSSProperties` _(optional)_ | Custom inline styles for the select button. |
| `dropdownStyle`   | `React.CSSProperties` _(optional)_ | Custom inline styles for the dropdown menu. |
| `optionStyle`     | `React.CSSProperties` _(optional)_ | Custom inline styles for each option. |
| `labelClassName`  | `string` _(optional)_         | Additional classes for the label element. |
| `labelStyle`      | `React.CSSProperties` _(optional)_ | Custom inline styles for the label element. |

---

### 5️⃣ Multi-Select Component
A component for selecting multiple options from a dropdown list.

#### Props:

| Prop                  | Type                               | Description |
|-----------------------|----------------------------------|-------------|
| `label`              | `string` _(optional)_            | The label text for the multi-select dropdown. |
| `options`            | `Option[]`                       | An array of options to display in the dropdown. |
| `selectedValues`     | `string[]`                       | An array of selected values. |
| `onChange`          | `(values: string[]) => void`     | Function triggered when the selection changes. |
| `placeholder`        | `string` _(optional)_            | Placeholder text displayed when no option is selected. |
| `className`         | `string` _(optional)_            | Additional classes for the multi-select component wrapper. |
| `style`             | `React.CSSProperties` _(optional)_ | Custom inline styles for the multi-select component wrapper. |
| `buttonClassName`   | `string` _(optional)_            | Additional classes for the multi-select button. |
| `dropdownClassName` | `string` _(optional)_            | Additional classes for the dropdown menu. |
| `optionClassName`   | `string` _(optional)_            | Additional classes for each dropdown option. |
| `MultiSelectButtonStyle` | `React.CSSProperties` _(optional)_ | Custom inline styles for the multi-select button. |
| `dropdownStyle`     | `React.CSSProperties` _(optional)_ | Custom inline styles for the dropdown menu. |
| `optionStyle`       | `React.CSSProperties` _(optional)_ | Custom inline styles for each option. |
| `labelClassName`    | `string` _(optional)_            | Additional classes for the label element. |
| `labelStyle`        | `React.CSSProperties` _(optional)_ | Custom inline styles for the label element. |


### 6️⃣ DateTime Component
A date-time input field with custom styling support.

#### Props:

| Prop             | Type                               | Description |
|-----------------|----------------------------------|-------------|
| `label`         | `string` _(optional)_            | The label text for the date/time input field. |
| `value`         | `string`                         | The current value of the date/time input (ISO format or a formatted string). |
| `onChange`      | `(value: string) => void`       | Function triggered when the date/time value changes. |
| `className`     | `string` _(optional)_            | Additional classes for the wrapper element. |
| `style`         | `React.CSSProperties` _(optional)_ | Custom inline styles for the wrapper element. |
| `inputClassName`| `string` _(optional)_            | Additional classes for the input field. |
| `inputStyle`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the input field. |
| `labelClassName`| `string` _(optional)_            | Additional classes for the label element. |
| `labelStyle`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the label element. |


---

### 7️⃣ Toggle Component
A toggle switch for boolean values.

#### Props:

| Prop             | Type                               | Description |
|-----------------|----------------------------------|-------------|
| `label`         | `string` _(optional)_            | The label text for the date/time input field. |
| `value`         | `string`                         | The current value of the date/time input (ISO format or a formatted string). |
| `onChange`      | `(value: string) => void`       | Function triggered when the date/time value changes. |
| `className`     | `string` _(optional)_            | Additional classes for the wrapper element. |
| `style`         | `React.CSSProperties` _(optional)_ | Custom inline styles for the wrapper element. |
| `inputClassName`| `string` _(optional)_            | Additional classes for the input field. |
| `inputStyle`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the input field. |
| `labelClassName`| `string` _(optional)_            | Additional classes for the label element. |
| `labelStyle`    | `React.CSSProperties` _(optional)_ | Custom inline styles for the label element. |


---

### 8️⃣ Filter Component
A comprehensive filtering system that supports text input, select dropdowns, multi-select, and date-time range filters.

#### Filter Component Props:

| Prop                    | Type                                   | Description |
|-------------------------|--------------------------------------|-------------|
| `filterSchema`          | `FilterSchema[]`                     | Defines the available filters and their properties. |
| `filters`               | `Record<string, any>`                | The current applied filters. |
| `setFilters`            | `(filters: Record<string, any>) => void` | Function to update the filter state. |
| `handleApply`           | `() => void`                         | Function triggered when filters are applied. |
| `handleResetFilters`    | `() => void`                         | Function triggered when filters are reset. |
| `showFilterCount`       | `boolean` _(optional)_               | Displays the count of active filters. Defaults to `false`. |
| `containerClassName`    | `string` _(optional)_                | Additional classes for the filter container. |
| `containerStyle`        | `React.CSSProperties` _(optional)_   | Custom inline styles for the filter container. |
| `filterButtonLabel`     | `string \| React.ReactNode` _(optional)_ | Label for the filter button. |
| `resetButtonLabel`      | `string \| React.ReactNode` _(optional)_ | Label for the reset button. |
| `applyButtonLabel`      | `string \| React.ReactNode` _(optional)_ | Label for the apply button. |
| `closeButtonLabel`      | `string \| React.ReactNode` _(optional)_ | Label for the close button. |
| `drawerTitle`           | `string \| React.ReactNode` _(optional)_ | Title of the filter drawer/modal. |
| `drawerClassName`       | `string` _(optional)_                | Additional classes for the drawer. |
| `drawerStyle`           | `React.CSSProperties` _(optional)_   | Custom inline styles for the drawer. |
| `drawerHeaderClassName` | `string` _(optional)_                | Additional classes for the drawer header. |
| `drawerHeaderStyle`     | `React.CSSProperties` _(optional)_   | Custom inline styles for the drawer header. |
| `drawerContentClassName`| `string` _(optional)_                | Additional classes for the drawer content. |
| `drawerContentStyle`    | `React.CSSProperties` _(optional)_   | Custom inline styles for the drawer content. |
| `drawerFooterClassName` | `string` _(optional)_                | Additional classes for the drawer footer. |
| `drawerFooterStyle`     | `React.CSSProperties` _(optional)_   | Custom inline styles for the drawer footer. |
| `overlayClassName`      | `string` _(optional)_                | Additional classes for the overlay. |
| `overlayStyle`          | `React.CSSProperties` _(optional)_   | Custom inline styles for the overlay. |
| `drawerTitleClassName`  | `string` _(optional)_                | Additional classes for the drawer title. |
| `drawerTitleStyle`      | `React.CSSProperties` _(optional)_   | Custom inline styles for the drawer title. |
| `filterButtonClassName` | `string` _(optional)_                | Additional classes for the filter button. |
| `filterButtonStyle`     | `React.CSSProperties` _(optional)_   | Custom inline styles for the filter button. |
| `applyButtonClassName`  | `string` _(optional)_                | Additional classes for the apply button. |
| `applyButtonStyle`      | `React.CSSProperties` _(optional)_   | Custom inline styles for the apply button. |
| `resetButtonClassName`  | `string` _(optional)_                | Additional classes for the reset button. |
| `resetButtonStyle`      | `React.CSSProperties` _(optional)_   | Custom inline styles for the reset button. |
| `closeButtonClassName`  | `string` _(optional)_                | Additional classes for the close button. |
| `closeButtonStyle`      | `React.CSSProperties` _(optional)_   | Custom inline styles for the close button. |

#### Filter Schema Props:

#### Props:

| Prop          | Type                 | Description |
|------------------|----------------------|-------------|
| `name`          | `string`             | Unique name for the filter. |
| `label`         | `string`             | Display label for the filter. |
| `type`          | `string`             | Type of filter (e.g., text, select, checkbox). |
| `options`       | `FilterOption[]`     | Optional list of options for select-type filters. |
| `placeholder`   | `string` (optional)  | Placeholder text for input fields. |
| `defaultValue`  | `any` (optional)     | Default selected value. |
| `name1`         | `string` (optional)  | Additional name field (use case-specific). |
| `name2`         | `string` (optional)  | Additional name field (use case-specific). |
| `className`     | `string` (optional)  | Custom class for the filter container. |
| `buttonClassName` | `string` (optional) | Custom class for the button. |
| `dropdownClassName` | `string` (optional) | Custom class for the dropdown. |
| `optionClassName` | `string` (optional) | Custom class for each option. |
| `style`         | `React.CSSProperties` (optional) | Inline styles for the filter container. |
| `buttonStyle`   | `React.CSSProperties` (optional) | Inline styles for the button. |
| `dropdownStyle` | `React.CSSProperties` (optional) | Inline styles for the dropdown. |
| `SelectButtonStyle` | `React.CSSProperties` (optional) | Inline styles for the select button. |
| `optionStyle`   | `React.CSSProperties` (optional) | Inline styles for the options. |
| `inputClassName` | `string` (optional) | Custom class for the input field. |
| `inputStyle`    | `React.CSSProperties` (optional) | Inline styles for the input field. |
| `toggleClassName` | `string` (optional) | Custom class for the toggle switch. |
| `toggleStyle`   | `React.CSSProperties` (optional) | Inline styles for the toggle switch. |
| `labelClassName` | `string` (optional) | Custom class for the label. |
| `labelStyle`    | `React.CSSProperties` (optional) | Inline styles for the label. |
| `required`      | `boolean` (optional) | Whether the filter is required. |
| `error`        | `string` (optional)  | Error message if validation fails. |
| `minLength`     | `number` (optional)  | Minimum character length for input. |
| `maxLength`     | `number` (optional)  | Maximum character length for input. |
| `regex`         | `RegExp` (optional)  | Regular expression validation pattern. |

---

## License
This project is licensed under the MIT License.

---

## Contributing
Feel free to submit issues or pull requests to enhance this package.

---

## Contact
For any questions or feedback, reach out to `theanjalisachan@gmail.com`.

