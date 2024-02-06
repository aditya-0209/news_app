// CountrySelect.jsx
import React from "react";
import { countries } from "../data";

const CountrySelect = ({ value, onChange }) => {
  return (
    <div className="my-4 mx-2">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        Choose a Country:
      </label>
      <select
        name="country"
        id="country"
        className="mt-1 block w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        onChange={onChange}
        value={value}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
