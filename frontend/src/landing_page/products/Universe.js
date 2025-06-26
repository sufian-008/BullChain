import React from 'react'

export default function Universe() {
  return (
    <div className='container mt-3 text-center'>
      <div className='row'>
        <h1 className='mb-2'>The Zerodha Universe</h1>
        <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

        <div className='col-4 p-3'>
          <img src="images/zerodhaFundhouse.png" style={{width:"40%"}} />
          <p className='text-small text-muted mt-3' style={{fontSize:"0.9em",}}>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>
        <div className='col-4 p-3'>
          <img src="images/sensibullLogo.svg"style={{width:"40%"}} />
          <p className='text-small text-muted mt-3' style={{fontSize:"0.9em",}}>Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className='col-4 p-3'>
          <img src="images/streakLogo.png" style={{width:"40%"}}/>
          <p className='text-small text-muted mt-3' style={{fontSize:"0.9em",}}>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="images/smallcaseLogo.png"style={{width:"40%"}} />
          <p className='text-small text-muted mt-3' style={{fontSize:"0.9em",}}>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
         <div className='col-4 p-3 mt-3'>
          <img src="images/smallcaseLogo.png"style={{width:"40%"}} />
          <p className='text-small text-muted mt-3' style={{fontSize:"0.9em",}}>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className='col-4 p-3 mt-3'>
          <img src="images/smallcaseLogo.png"style={{width:"40%"}} />
          <p className='text-small text-muted mt-3' style={{fontSize:"0.9em",}}>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
         <button className='p-2 btn btn-primary fs-5' style={({width:"20%", margin:"0 auto"})}>Sign Up</button>
      </div>
    </div>
  );

}
