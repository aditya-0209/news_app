import React, { useState, useEffect } from "react";
import NavBar from "../component/navbar";
import CountrySelect from "../component/countrySelect";
import CategorySelect from "../component/categorySelect";
import LanguageSelect from "../component/languageSelect";
import SourceItem from "../component/sourceItem";
const Sources = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [sources, setSources] = useState('');
  useEffect(() => {
    if (category&&country&&language) {
      const url = `https://newsapi.org/v2/top-headlines/sources?category=${category}&country=${country}&language=${language}&apiKey=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
            setSources(data.sources);
          })
        .catch((error) => {
          console.error("Error fetching Sources:", error);
          setSources([]);
        });
    }
  }, [country, category,language]);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  
  return (
<div>
  <NavBar />
    <div className="flex flex-row">
        <CountrySelect value={country} onChange={handleCountryChange} />
        <CategorySelect value={category} onChange={handleCategoryChange} />
        <LanguageSelect value={language} onChange={handleLanguageChange} />
    </div>
    <div className="flex flex-wrap justify-center">
        {sources && sources.map((sources, index) => (
          <SourceItem
            key={index}
            name={sources.name}
            description={sources.description}
            url={sources.url}
            category={sources.category}
            language = {sources.language}
            country = {sources.country}
          />
        ))}
      </div>
  </div>

  );
};

export default Sources;
