import React from "react";

const AppSelect = ({ items,selectedItem,...props }) => {
  return (
    <div className={props.className}>
      <span className="block text-sm font-medium text-gray-500">
        {props.label}
      </span>
      <select value={props.selectedItem} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
        {items?.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AppSelect;
