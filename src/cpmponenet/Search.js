import React from 'react'

function Search() {
  return (
    <div className='flex justify-between m-5'>
        <input
        className='shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] p-2  bg-slate-200'
         type='text'
        placeholder='Search Rasturant'
        ></input>
        <div className='p-2 bg-slate-200'>
            <label>Search By Rating :</label>
            <input className='w-16  bg-slate-200' type='number'></input>
        </div>
    </div>
  )
}

export default Search