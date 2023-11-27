import React from 'react'

function Search() {
  return (
    <div className='flex justify-between m-5'>
        <input
        className=' p-2 rounded-2xl  bg-slate-200'
         type='text'
        placeholder='Search Rasturant'
        ></input>
        <div className='p-2 rounded-2xl bg-slate-200'>
            <label>Search By Rating :</label>
            <input className='w-16  bg-gray-400-200 p-1' type='number'></input>
        </div>
    </div>
  )
}

export default Search