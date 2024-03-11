import React from 'react';

import '../style/home.css';


export default function Home() {

  return (
   
      <div className='home-container'>
     
        <div className="box">
        <h1>Home</h1>
          <div className="section">
            <button >User Details</button>
            <button >Personal Details</button>
            <br />
            <button >Academic Details</button>
            <button >Address Details</button>
            <br />
            <button >Employment Details</button>
            <button >Experience Details</button>
            <br />
          </div>
        </div>
      </div>
   
  );
}
