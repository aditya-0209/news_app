import React from "react";
import { languages } from "../data";

const LanguageSelect = ({ value, onChange }) => {
  return (
    <div className="my-4 mx-2">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        Choose a Language:
      </label>
      <select
        name="language"
        id="language"
        className="mt-1 block w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        onChange={onChange}
        value={value}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
