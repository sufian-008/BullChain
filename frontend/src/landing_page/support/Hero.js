import React from 'react'

export default function Hero() {
  return (
    <section className='container-fluid' id='supportHero'>
      <div className=' p-5' id='supportWrapper'>
        <h4 >Support Portal</h4>
        <a href='' style={{ textDecoration: "underline", color: "white" }}>Track Tickets</a>
      </div>
      <div className='row p-3 mx-5'>
        <div className='col-6 p-5  '>
          <h4 className='fs-3'>Search for an answer or browse help topics to create a ticket</h4>
          <input className='mb-2' placeholder='Eg. how do i activate F&O, why is my order getting rejected....' />
          <br />
          <a href='' style={{ textDecoration: "underline", color: "white", marginRight: "20px" }}>Track account opening</a>
          <a href='' style={{ textDecoration: "underline", color: "white", marginRight: "20px" }}>Track segment activation</a>
          <a href='' style={{ textDecoration: "underline", color: "white", marginRight: "20px" }}>Intraday margins</a>
          <a href='' style={{ textDecoration: "underline", color: "white" }}>Kite user manual</a>
        </div>
        <div className='col-6  p-5 '>
          <h4 className='fs-3'>Feature</h4>
          <ol>
            <li> <a href='' style={{ textDecoration: "underline", color: "white" }}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
            <li><a href='' style={{ textDecoration: "underline", color: "white" }}>Revision in expiry day of Index and Stock derivatives contractsF</a></li>
          </ol>

        </div>
      </div>

    </section>
  )
}
