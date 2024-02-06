import React, { useState, useEffect } from 'react';
import NavBar from '../component/navbar';
import NewsItem from '../component/NewsItem';
import CountrySelect from '../component/countrySelect';
import CategorySelect from '../component/categorySelect';

const TopHeadline = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  // const baseUrl = process.env.NEWS_BASE_URL;
  const [country, setCountry] = useState('us');
  const [headlines, setHeadlines] = useState([]);
  const [category, setCategory] = useState('general');
  useEffect(() => {
    if (category) {
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setHeadlines(data.articles);
        })
        .catch((error) => {
          console.error('Error fetching headlines:', error);
          setHeadlines([]);
        });
    }
  }, [country, category]);
  

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className='flex gap-3'>
        <CountrySelect value={country} onChange={handleCountryChange} />
        <CategorySelect value={category} onChange={handleCategoryChange} />
      </div>
      <div className="flex flex-wrap justify-center">
        {headlines.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            author={news.author}
            content={news.content}
            url={news.url}
            urlToImage={news.urlToImage}
            description={news.description}
            publishedAt={news.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default TopHeadline;
