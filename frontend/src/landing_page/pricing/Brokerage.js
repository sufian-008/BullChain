import React from 'react'

export default function Brokerage() {
  return (
    <div className='container mt-5 border-top'> 
       <div className='row p-5 mt-5 text-center'>
        <div className='col-8 p-5'>
             
              <a href='' style={{color:"blue"}}> <h3 className='fs-5'>Brokerage Calculator</h3></a>
              <ul className='text-muted ' style={{textAlign:"left", lineHeight:"2.3", fontSize:"14px"}}>
                <li>Call & Trade and RMS auto-squareoff:Additional charges of $50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged $20 per contract note. Courier charges apply.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged $20 per contract note. Courier charges apply.</li>
              </ul>
        </div>
        <div className='col-4 p-5 '>
            <a href='' style={{color:"blue"}}><h3 className='fs-5' >List of Charges</h3></a>
        </div>
       </div>
    </div>
  )
}
