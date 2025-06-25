import React from 'react'

export default function Team() {
  return (
    <div className='container border-top'>
            <div className='row mt-5  text-center '>
                <h1>People</h1>
            </div>
             <div className="text-muted fs-6 mt-5 row p-5 text-center" style={{lineHeight:"2", fontSize:"1.2rem"}}>
                <div className='col-md-6 px-4 '>
                    <img src='images/Profile.jpg' style={{borderRadius:"100%", width:"70%"}} />
                    <h1 className='mt-4 fs-4'>Abu Sufian</h1>
                    <h2 className='fs-4'>Founder and CEO</h2>
                    </div>
                 <div className='col-md-6 px-4'>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p> <a href='' style={{color:"blue"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                  </div>
            </div>
        </div>
  )
}
