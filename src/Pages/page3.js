import React from 'react';
import Accordion from '../Components/accordian/accordian';
import Header from '../Components/header';
function Page3() {
  const W=JSON.parse(localStorage.getItem('DetailedData'))
  console.log(W)
  return (
    <>
      <Header />
      {W ?
       <div className="App">
       <div className="Main_header">
         Short Text Analysis
       </div>
       <div className="Sub_header">
         Lifelong LLM99 Foot,Calf and Leg Massager,(With Heat and Vibration),80W,$ Motors,Dark Brown
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