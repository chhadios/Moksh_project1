import React from 'react';
import Accordion from '../Components/accordian/accordian';
import Header from '../Components/header';
function Page3() {
  const W=JSON.parse(localStorage.getItem('DetailedData'))
  const P=JSON.parse(localStorage.getItem('ProductDetails'))
  return (
    <>
      <Header />
      {W ?
       <div className="App">
       <div className="Main_header">
         Review Level
       </div>
       <div className="Sub_header">
         {P.ProductName}
       </div>
       <div className="App_container">
         
           <Accordion Level1={W} />
          
       </div>
     </div>
      : <></>}
     
    </>
  );
}

export default Page3;