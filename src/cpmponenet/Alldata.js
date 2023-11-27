import React from 'react'
import alldetails from '../cpmponenet/contents/restaurant.json'
import Cardcomp from './Cardcomp'

function Alldata() {

  return (
    <>
    <div className='flex flex-wrap m-auto justify-evenly'>
    {
        alldetails.restaurants.map((restaurants,index) => 
        
            (   <Cardcomp 
             key={index}
             address={restaurants.address}  
             url={restaurants.URL}  
             name={restaurants.name} 
             outcode={restaurants.outcode} 
             postcode={restaurants.postcode} 
             rating={restaurants.rating} 
             type={restaurants.type_of_food}
             />
            )
        
        )
    }
    </div>
    </>
  )
}

export default Alldata