import React from 'react'

function Awards() {
  return (
     <div className='container mt-5'>
      <div className='row '>
         <div className='col-6 p-5'>
           <img src='images/largestBroker.svg'/>
         </div>
         <div className='col-6 p-5'>
          <h1>Largest stock broker in India</h1>
          <p  className='mb-5'>2+ million BullChain clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
              <ul>
                <div className='row'>
                        <div className='col-6'>
                             <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
                        </div>
                        <div className='col-6'>
                             <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Future and Options</p>
                </li>
                        </div>
                </div>
               
              </ul>
               <img src='images/pressLogos.png' style={{width:"90%"}}/>
         </div>
        
        
      </div>
     </div>
  )
}

export default Awards
