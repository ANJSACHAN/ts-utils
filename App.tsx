// App.tsx
import React, { useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  DateTimePicker,
  Toggle,
} from "./src/Components";
import { Option } from "./src/type";
import FilterComponent from "./src/filterComponent";

const App = () => {
  const filterSchema = [
    {
      name: "search",
      label: "Search",
      type: "text",
      placeholder: "Search...",
      className: "bg-red-200",
    },
    {
      name: "search2",
      label: "Search2",
      type: "password",
      placeholder: "Search...",
      className: "bg-blue-200",
    },
    {
      name: "search3",
      label: "Search3",
      type: "number",
      placeholder: "Search...",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
    {
      name: "categories",
      label: "Categories",
      type: "multi-select",
      options: [
        { value: "cat1", label: "Category 1" },
        { value: "cat2", label: "Category 2" },
      ],
    },
    {
      name: "dateRange",
      label: "Date Range",
      type: "datetime-range",
      name1: "startDate",
      name2: "endDate",
    },
  ];

  const [filters, setFilters] = useState({});

  const handleApply = () => {
    console.log(filters);
  };

  const handleReset = () => {
    setFilters({});
  };

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [textValue, setTextValue] = useState("");
  const [dateTime, setDateTime] = React.useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isToggled, setIsToggled] = React.useState(false);
  const options: Option[] = [
    { value: "apple", label: "Apple 🍎" },
    { value: "banana", label: "Banana 🍌" },
    { value: "grape", label: "Grape 🍇" },
    { value: "orange", label: "Orange 🍊" },
  ];

  return (
    <div style={{ padding: "20px", height: "100vh" }} className="bg-red-200">
      <h1>Component Library Test</h1>
      <TextInput
        name="text"
        label="Text Input"
        type="text"
        value={textValue}
        onChange={setTextValue}
        placeholder="Enter text"
      />

      <Select
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="Choose a fruit"
      />

      <MultiSelect
        options={options}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
        placeholder="Choose fruits"
      />

      <DateTimePicker value={dateTime} onChange={setDateTime} />

      <Toggle checked={isToggled} onChange={setIsToggled} />

      <FilterComponent
        filterSchema={filterSchema}
        filters={filters}
        setFilters={setFilters}
        handleApply={handleApply}
        handleResetFilters={handleReset}
      />
    </div>
  );
};

export default App;
