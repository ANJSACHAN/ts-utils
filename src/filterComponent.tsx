import React, { useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  DateTimePicker,
} from "./Components";

interface FilterOption {
  value: string;
  label: string;
}

interface DateRange {
  start: string;
  end: string;
}

interface FilterField {
  name: string;
  label: string;
  type: "text" | "select" | "multi-select" | "datetime-range";
  options?: FilterOption[];
  placeholder?: string;
  defaultValue?: any;
}

interface FilterSchema {
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
  optionStyle?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
  toggleClassName?: string;
  toggleStyle?: React.CSSProperties;
  sliderClassName?: string;
  sliderStyle?: React.CSSProperties;
}

interface FilterComponentProps {
  filterSchema: FilterSchema[];
  filters: Record<string, any>;
  setFilters: (filters: Record<string, any>) => void;
  handleApply: () => void;
  handleResetFilters: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterSchema,
  filters,
  setFilters,
  handleApply,
  handleResetFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleApplyFilters = () => {
    setIsOpen(false);
    handleApply();
  };

  const handleChange = (type: string, newValue: any) => {
    setFilters({
      ...filters,
      [type]: newValue,
    });
  };

  const handleDateChange = (name: string) => (date: string) => {
    setFilters((prevFilters: Record<string, any>) => ({
      ...prevFilters,
      [name]: date || null,
    }));
  };

  const getActiveFilterCount = (): number => {
    return Object.entries(filters).reduce((count, [_, value]) => {
      if (
        (Array.isArray(value) && value.length > 0) ||
        (value && !Array.isArray(value))
      ) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const renderField = (filter: FilterSchema) => {
    switch (filter.type) {
      case "text":
      case "email":
      case "number":
      case "password":
        return (
          <TextInput
            name={filter.name}
            label={filter.label}
            type={filter.type}
            value={filters[filter.name] || ""}
            onChange={(value) => handleChange(filter.name, value)}
            placeholder={filter.placeholder}
            className={`mb-4 ${filter.className}`}
            style={filter.style}
          />
        );

      case "select":
        return (
          <Select
            options={filter.options || []}
            value={filters[filter.name] || null}
            onChange={(value) => handleChange(filter.name, value)}
            placeholder={filter.placeholder}
            className={`mb-4 ${filter.className}`}
            style={filter.style}
          />
        );

      case "multi-select":
        return (
          <MultiSelect
            options={filter.options || []}
            selectedValues={filters[filter.name] || []}
            onChange={(values) => handleChange(filter.name, values)}
            placeholder={filter.placeholder}
            className={`mb-4 ${filter.className}`}
            style={filter.style}
          />
        );

      case "datetime-range":
        return (
          <div className="mb-4">
            <p className="mb-2">{filter.label}</p>
            <div className="flex items-center gap-4">
              <DateTimePicker
                value={filters[filter.name1 || ""] || ""}
                onChange={handleDateChange(filter.name1 || "")}
                className={`flex-1 ${filter.className}`}
                style={filter.style}
              />
              <span>to</span>
              <DateTimePicker
                value={filters[filter.name2 || ""] || ""}
                onChange={handleDateChange(filter.name2 || "")}
                className={`flex-1 ${filter.className}`}
                style={filter.style}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <Button
          label={`Filters (${getActiveFilterCount()})`}
          onClick={handleDrawerToggle}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
        />
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={handleDrawerToggle}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Filters</h2>
            <Button
              label="×"
              onClick={handleDrawerToggle}
              className="text-2xl hover:text-gray-700"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {filterSchema.map((filter) => (
              <div key={filter.name} className="mb-4">
                {renderField(filter)}
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-4">
            <Button
              label="Reset"
              onClick={handleResetFilters}
              className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            />
            <Button
              label="Apply"
              onClick={handleApplyFilters}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
