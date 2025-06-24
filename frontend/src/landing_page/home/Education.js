import React from 'react'

function Education() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
         <img src='images/education.svg' />

        </div>
       
        <div className='col-6 ' >
        <h1>Free and open market education</h1>
        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
       <a href='#' className='d-block mb-4 text-decoration-none text-primary'>
            Varsity <i class="bi bi-arrow-right"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
          </p>
          <a href='#' className='text-decoration-none text-primary'>TradingQ&A <i class="bi bi-arrow-right"></i></a>
         </div>
      </div>
          
     </div>
  )
}

export default Education
