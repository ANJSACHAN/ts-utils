// App.tsx
import React, { useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  DateTimePicker,
  Toggle,
} from "./src/Component";
import { Option } from "./src/types/Component";
import FilterComponent from "./src/FilterComponent";
import Alert from "./src/Alert";

const App = () => {
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
      labelClassName : "mb-2" 
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
    setAlertColor("green")
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

  const[alert , setAlert] = useState(false);
  const[alertMsg , setAlertMsg] = useState("");
  const[alertColor, setAlertColor] = useState("")
  return (
    <div style={{ padding: "20px", height: "100vh" }} className="bg-red-200">
      <h1>Component Library Test</h1>
      <TextInput
        name="text"
        label="Text Input"
        type="number"
        value={textValue}
        onChange={setTextValue}
        placeholder="Enter text"
        
      />

      <Select
      label ="choose"
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="Choose a fruit"
      />

      <MultiSelect
       label ="choose"
        options={options}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
        placeholder="Choose fruits"
      />

      <DateTimePicker  label ="choose" value={dateTime} onChange={setDateTime} />

      <Toggle  label ="choose" checked={isToggled} onChange={setIsToggled} />

      <FilterComponent
      filterSchema={filterSchema}
      filters={filters}
      setFilters={setFilters}
      handleApply={() => handleApply()}
      handleResetFilters={() => setFilters({})}
    />

    <Alert
    open = {alert}
    onClose = {() => setAlert(false)}
    message = {alertMsg}
    color = {alertColor}
iconColor ="red"

    />
    </div>
  );
};

export default App;
