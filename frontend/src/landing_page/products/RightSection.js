import React from 'react';

export default function RightSection({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-6 d-flex flex-column justify-content-center p-5'>
          <h1>{productName}</h1>
          <p className='text-wrap'>{productDescription}</p>
          <a href={learnMore} style={{color:"blue"}}>Learn More</a>
        </div>
        <div className='col-6'>
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
}
