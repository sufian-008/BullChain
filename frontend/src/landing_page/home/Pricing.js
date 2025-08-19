import React from 'react'

function Pricing() {
  return (
   <div className='container mt-5'>
     <div className='row'>
      <div className='col-4'>
         <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
         <p>We pioneered the concept of discount broking and price transparency in Bangladesh. Flat fees and no hidden charges.</p>
      </div>
      <div className='col-2  border text-center p-3 mx-3'>
          <h2 className='fs-1'>₹0</h2>
          <p>Free account opening</p>
        </div>

        <div className='col-2  border text-center p-3'>
          <h2 className='fs-1'>₹0</h2>
          <p>Free equity delivery and client mutual funds</p>
        </div>
      

     </div>

   </div>
  )
}

export default Pricing
