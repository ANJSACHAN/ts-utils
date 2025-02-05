import React, { useState } from "react";
import {
  TextInput,
  Button,
  Select,
  MultiSelect,
  DateTimePicker,
  Toggle,
} from "./Component";

import { FilterComponentProps, FilterSchema } from "./types/Filter";

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterSchema,
  filters,
  setFilters,
  handleApply,
  handleResetFilters,
  showFilterCount = true,
  // Container styles
  containerClassName = "",
  containerStyle = {},
  drawerClassName = "",
  drawerStyle = {},
  drawerHeaderClassName = "",
  drawerHeaderStyle = {},
  drawerContentClassName = "",
  drawerContentStyle = {},
  drawerFooterClassName = "",
  drawerFooterStyle = {},
  overlayClassName = "",
  overlayStyle = {},
  drawerTitleClassName = "",
  drawerTitleStyle = {},
  // Button styles
  filterButtonClassName = "",
  filterButtonStyle = {},
  applyButtonClassName = "",
  applyButtonStyle = {},
  resetButtonClassName = "",
  resetButtonStyle = {},
  closeButtonClassName = "",
  closeButtonStyle = {},
  // Custom labels
  filterButtonLabel,
  resetButtonLabel = "Reset",
  applyButtonLabel = "Apply",
  closeButtonLabel = "×",
  drawerTitle = "Filters",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState<boolean>(false);
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
            name={filter.name || ""}
            label={filter.label}
            type={filter.type}
            value={filters[filter.name] || ""}
            required={filter.required}
            error={filter.error}
            minLength={filter.minLength}
            maxLength={filter.maxLength}
            regex={filter.regex}
            onChange={(value) => handleChange(filter.name, value)}
            placeholder={filter.placeholder}
            className={`mb-4 ${filter.className || ""}`}
            style={filter.style}
            labelClassName={filter.labelClassName}
            inputClassName={filter.inputClassName}
            inputStyle={filter.inputStyle}
            labelStyle={filter.labelStyle}
          />
        );

      case "select":
        return (
          <Select
            label={filter.label}
            options={filter.options || []}
            value={filters[filter.name] || null}
            onChange={(value) => handleChange(filter.name, value)}
            placeholder={filter.placeholder}
            className={`mb-4 ${filter.className || ""}`}
            style={filter.style}
            buttonClassName={filter.buttonClassName}
            dropdownClassName={filter.dropdownClassName}
            optionClassName={filter.optionClassName}
            SelectButtonStyle={filter.SelectButtonStyle}
            dropdownStyle={filter.dropdownStyle}
            optionStyle={filter.optionStyle}
            labelClassName={filter.labelClassName}
            labelStyle={filter.labelStyle}
          />
        );

      case "multi-select":
        return (
          <MultiSelect
            label={filter.label}
            options={filter.options || []}
            selectedValues={filters[filter.name] || []}
            onChange={(values) => handleChange(filter.name, values)}
            placeholder={filter.placeholder}
            className={`mb-4 ${filter.className || ""}`}
            style={filter.style}
            buttonClassName={filter.buttonClassName}
            dropdownClassName={filter.dropdownClassName}
            optionClassName={filter.optionClassName}
            MultiSelectButtonStyle={filter.SelectButtonStyle}
            dropdownStyle={filter.dropdownStyle}
            optionStyle={filter.optionStyle}
            labelClassName={filter.labelClassName}
            labelStyle={filter.labelStyle}
          />
        );

      case "datetime-range":
        return (
          <div className="mb-4  w-full max-w-md">
            <p className={filter.labelClassName} style={filter.labelStyle} >{filter.label}</p>
            <div className="flex items-center gap-2 w-full">
              <DateTimePicker
                value={filters[filter.name1 || ""] || ""}
                onChange={handleDateChange(filter.name1 || "")}
                className={`flex-1 ${filter.className}`}
                style = {filter.style}
                inputClassName={filter.inputClassName}
                inputStyle = {filter.inputStyle}
                labelClassName={filter.labelClassName}
                labelStyle={filter.labelStyle}
               
              />
              <span className="text-gray-500 whitespace-nowrap">to</span>
              <DateTimePicker
                value={filters[filter.name2 || ""] || ""}
                onChange={handleDateChange(filter.name2 || "")}
                className={`flex-1 ${filter.className}`}
                style = {filter.style}
                inputClassName={filter.inputClassName}
                inputStyle = {filter.inputStyle}
                labelClassName={filter.labelClassName}
                labelStyle={filter.labelStyle}
              />
            </div>
          </div>
        );
      case "datetime":
        return (
          <div className="mb-4  w-full max-w-md">
            <p className={filter.labelClassName} style={filter.labelStyle}>{filter.label}</p>

            <DateTimePicker
              value={filters[filter.name || ""] || ""}
              onChange={handleDateChange(filter.name || "")}
              className={`flex-1 ${filter.className}`}
              style = {filter.style}
              inputClassName={filter.inputClassName}
              inputStyle = {filter.inputStyle}
              labelClassName={filter.labelClassName}
              labelStyle={filter.labelStyle}
            />
          </div>
        );
      case "toggle":
        return (
          <Toggle
            label={filter.label || "Toggle"}
            checked={filters[filter.name] || isToggled}
            onChange={(checked) => handleChange(filter.name, checked)}
            className={filter.className}
            style={filter.style}
            labelClassName={filter.labelClassName}
            toggleClassName={filter.toggleClassName}
            toggleStyle={filter.toggleStyle}
            labelStyle={filter.labelStyle}
            
          />
        );

      default:
        return null;
    }
  };

  const defaultFilterLabel = showFilterCount
    ? `Filters (${getActiveFilterCount()})`
    : "Filters";

  return (
    <div className={`relative ${containerClassName}`} style={containerStyle}>
      <div className="flex items-center">
        <Button
          label={filterButtonLabel || defaultFilterLabel}
          onClick={handleDrawerToggle}
          className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out ${filterButtonClassName}`}
          style={filterButtonStyle}
        />
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-opacity-25 backdrop-blur-sm transition-opacity duration-300 z-40 ${overlayClassName}`}
          style={overlayStyle}
          onClick={handleDrawerToggle}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${drawerClassName}`}
        style={drawerStyle}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div
            className={`flex justify-between items-center px-6 py-4 border-b border-gray-300 ${drawerHeaderClassName}`}
            style={drawerHeaderStyle}
          >
            <h2
              className={`text-lg font-semibold text-gray-900 ${drawerTitleClassName}`}
              style={drawerTitleStyle}
            >
              {drawerTitle}
            </h2>
            <Button
              label={closeButtonLabel}
              onClick={handleDrawerToggle}
              className={`p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out ${closeButtonClassName}`}
              style={closeButtonStyle}
            />
          </div>

          {/* Drawer Content */}
          <div
            className={`flex-1 overflow-y-auto p-6 ${drawerContentClassName}`}
            style={drawerContentStyle}
          >
            {filterSchema.map((filter) => (
              <div key={filter.name} className="mb-4">
                {renderField(filter)}
              </div>
            ))}
          </div>

          
          <div
            className={`p-6 border-t border-gray-300 flex gap-4 ${drawerFooterClassName}`}
            style={drawerFooterStyle}
          >
            <Button
              label={resetButtonLabel}
              onClick={handleResetFilters}
              className={`flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-150 ease-in-out ${resetButtonClassName}`}
              style={resetButtonStyle}
            />
            <Button
              label={applyButtonLabel}
              onClick={handleApplyFilters}
              className={`flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out ${applyButtonClassName}`}
              style={applyButtonStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
