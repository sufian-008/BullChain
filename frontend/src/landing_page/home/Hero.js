import React from 'react'

function Hero() {
  return (
     <div className='container'>
       <div className='row'>
              <img src='images/homeHero.png ' alt='Hero Image' />
              <h1 className='mt-5'> Invest in everything</h1>
              <p>Online Platform  to invest in steeokes, derivatives, mutual funds, and more</p>
              <button className='p-3 btn btn-primary' style={({width:"20%", margin:"0 auto"})}>Sign Up</button>
       </div>
         
     </div> 
  )
}

export default Hero
 