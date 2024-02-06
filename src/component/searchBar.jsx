import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (searchTerm) => {
    // Pass the search term to the parent component or perform any other action
    onSearch(searchTerm);
  };

  return (
    <div className="my-4 mx-2 flex w-64">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
      <button
        onClick={()=>handleSearch(searchTerm)}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
