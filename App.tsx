// App.tsx
import React, { useState } from 'react';
import { TextInput, Button, Select, MultiSelect, DateTimePicker, Toggle } from './src/Components'; // Adjust the path accordingly
import { FieldType , Option} from './src/type'; 

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [multiSelectedOptions, setMultiSelectedOptions] = useState<string[]>([]);
  const [dateTime, setDateTime] = useState('');
  const [isToggled, setIsToggled] = React.useState(false);

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const options: Option[] = [
    { value: "apple", label: "Apple 🍎" },
    { value: "banana", label: "Banana 🍌" },
    { value: "grape", label: "Grape 🍇" },
    { value: "orange", label: "Orange 🍊" },
  ];

  return (
    <div style={{ padding: '20px' }}>
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


      <DateTimePicker
        value={dateTime}
        onChange={setDateTime}
        
      />

      <Toggle
        checked={isToggled}
        onChange={setIsToggled}
        
      />
     
    </div>
  );
};

export default App;
