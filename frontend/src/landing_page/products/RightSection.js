import React from 'react'

export default function RightSection({imageUrl,productName, productDescription,learnMore}) {
  return (
   <div className='container p-5 mt-5'>
           <div className='row '>
               <div className='col-6 p-5 mt-4 '>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <a href={learnMore}>learn More</a>
               </div>
               <div className='col-6 '>
                   <img src={imageUrl}/>
               </div>
           </div>
      </div>
  )
}
