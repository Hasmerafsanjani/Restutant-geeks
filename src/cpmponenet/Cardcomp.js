import React from 'react'

function Cardcomp({address,
    address2,
    url,
    name,
    outcode,
    postcode,
    rating,
    type}) {
      
  return (
    <>
    <div >
        <div className='h-[250px] w-[420px] rounded-2xl shadow-[0_35px_60px_10px_rgba(0,0,0,0.3)] flex flex-col justify-between mb-10 '>
            <div>
            <div className='flex items-center'>
            <h2 className='text-2xl font-semibold p-4'>{name}</h2>
            <p>{rating}⭐⭐⭐⭐⭐</p>
            </div>
            <div className='pl-4 font-semibold'>🛐  {address} + {address2}</div>
            <div className='flex gap-3 pl-4 font-semibold'><p>{outcode}</p><p>{postcode}</p></div>
        </div>
        <div className='p-4  gap-3 my-4 font-semibold flex flex-col p'>
            <p className='text-green-500'>🍴 {type}</p>
            <a href={url} target='_blank' className='text-blue-500'>menu</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default Cardcomp