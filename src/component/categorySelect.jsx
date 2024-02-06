import React from "react";
import { categories } from "../data";

const CategorySelect = ({ value, onChange }) => {
  return (
    <div className="my-4 mx-2">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        Choose a Category:
      </label>
      <select
        name="category"
        id="category"
        className="mt-1 block w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        onChange={onChange}
        value={value}
      >
        {categories.map((category) => (
          <option  value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
