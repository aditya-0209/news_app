import React from 'react'

const SourceItem = ({name,description,url,category,language,country}) => {  return (
    <div className=' w-64 h-56 border rounded-lg m-6 transform hover:scale-105 bg-slate-200 overflow-hidden'>
        <h1 className='font-sans font-bold text-lg text-center bg-slate-800 text-white'>{name}</h1>
        <p className='text-sm p-1  font-sans '>{description}</p>
        {/* <h3 className='text-sm font-bold text-right px-2'>{category}</h3>
        <h3 className='text-sm font-bold text-right px-2'>{language}</h3>
        <h3 className='text-sm font-bold text-right px-2'>{country}</h3> */}
        <div className='flex justify-end m-3'>
        <a href={url} target='blank' className='rounded px-2 text-white text-sm border my-4 hover:bg-blue-500 bg-gray-500'>Click Here</a>
        </div>
        
    </div>
  )
}

export default SourceItem;