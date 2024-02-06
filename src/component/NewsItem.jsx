import React from 'react'
import image from '../assets/news1.jpg'

const NewsItem = ({title,description,author,urlToImage,url,publishedAt,content}) => {
  function getReadableDate(dateAndTime) {
    const currentDate = new Date(dateAndTime);
  
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Month is zero-based
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    // Adding leading zeros for single-digit values
    const formattedDate = `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  
    return formattedDate;
  }
  // Helper function to add leading zero for single-digit values
function padZero(value) {
  return value < 10 ? `0${value}` : value;
}
const date = getReadableDate(publishedAt);
  return (
    <div className=' h-auto w-64 border rounded-lg  transform hover:scale-110 m-6'>
        <img src={urlToImage?urlToImage:image} className='h-48  object-cover transform '/>
        <h4 className='text-sm p-1 font-bold font-serif bg-rose-800 text-white '>{title}</h4>
        <p className='text-sm p-1  font-sans '>{description}</p>
        <h3 className='text-sm font-bold text-right px-2 truncate'>{author?author:"Resource"}</h3>
        <a href={url} target='blank' className='rounded py-1 px-2 m-2 text-white text-sm border my-4 bg-gray-400 hover:bg-blue-500'>Read More</a>
        <p className='text-sm font-thin px-2 text-right py-1'>{date}</p>


    </div>
  )
}

export default NewsItem