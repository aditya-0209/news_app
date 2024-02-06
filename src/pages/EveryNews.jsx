import React, { useEffect, useState } from 'react';
import NewsItem from '../component/NewsItem';
import NavBar from '../component/navbar';
import SearchBar from '../component/searchBar';


const EveryNews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
   if(searchTerm!==""){
   var url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setArticles(data.articles);
    })
    .catch((error) => console.error('Error fetching data:', error));
}
else{
  setArticles([]);
}
   
  }, [searchTerm]);
  

  return (
    <div className='w-full h-screen flex flex-col'>
      <NavBar />
      <SearchBar onSearch={setSearchTerm} />
      <div className='flex flex-wrap justify-center'>
        {articles.length===0 && <div className='text-black text-2xl w-full flex items-center justify-center'>Start Searching Here...</div>}
        {articles && 
          articles.map((news, index) => (
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

export default EveryNews;
