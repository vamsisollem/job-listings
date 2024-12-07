import React from 'react'
import headImage from '/images/bg-header-desktop.svg';
import { useStore } from './store';
import { useEffect } from 'react';
function App() {
  const {filteredJobs, fetchJobs, handleFilter} = useStore();
  useEffect(()=>{
    fetchJobs();
  },[])
  return (
    <div className='bg-background min-h-screen'>
      <header>
        <img src={headImage} alt="heading banner" className='w-fill h-fit'></img>
      </header>
      <div className='p-5 mx-12 my-5'>
        {filteredJobs.map((job)=> (
          <div key={job.id} className='bg-element flex mb-2 w-full shadow-lg p-2 rounded-lg hover:border-l-8 border-cyan'>
            <img src={job.logo} alt={job.company} className='w-[100px] h-[100px] p-5 h-fit'></img>
            <div className='w-2/4'>
              <ul className='flex flex-wrap content-center'>
                <li className='text-sm text-cyan p-2'>{job.company}</li>
                {job.new === true ? <li className='bg-cyan h-fit rounded-lg text-xs p-1 mr-2'>NEW!</li> : null}
                {job.featured ===true ? <li className='bg-black h-fit rounded-lg text-xs p-1 ml-2 text-element'>Featured</li> : null}
              </ul>
              <ul><li className='font-bold'>{job.position}</li></ul>
              <ul className='flex'>
                <li className='text---Dark-Grayish-Cyan p-1 mr-3 text-xs'>{job.postedAt}</li>
                <li className='text---Dark-Grayish-Cyan p-1 mr-3 text-xs'>{job.contract}</li>
                <li className='text---Dark-Grayish-Cyan p-1 text-xs'>{job.location}</li>
              </ul>
            </div>
            <ul className='w-2/4 flex flex-wrap justify-end content-center'>
              {job.languages.map((language)=>(
                <li key={language} className='text-cyan bg-element mr-2 p-2 text-sm shadow-lg cursor-pointer' onClick={() => handleFilter(language)}>{language}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
