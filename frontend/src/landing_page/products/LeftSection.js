import React from 'react'

export default function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
   return (
      <div className='container  mt-5 p-5'>
         <div className='row mt-5'>
            <div className='col-6 p-5'>
               <img src={imageUrl} />
            </div>
            <div className='col-6 p-5 mt-4'>
               <h1>{productName}</h1>
               <p>{productDescription}</p>
               <div>
                  <a href={tryDemo} style={{color:"blue"}}>Try Demo → </a>
                  <a href={learnMore} style={{marginLeft:"50px", color:"blue"}}>learn More →</a>
               </div>
               <div className='mt-3'>
                  <a href={googlePlay}><img src='images/googlePlayBadge.svg' /></a>
                  <a href={appStore} style={{marginLeft:"50px"}}><img src='images/appstoreBadge.svg' /></a>
               </div>


            </div>
         </div>
      </div>
   )
}
