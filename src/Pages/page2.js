import React from "react";
import Header from "../Components/header";
import OverallRating from "../Components/OverallRating";
import PositiveRatingTable from "../Components/PositiveRatingTable";
import NegativeRatingTable from "../Components/NegativeRatingTable";
const Page2=()=>{
  const Data=JSON.parse(localStorage.getItem('RawData'))

return (
    <>
    <Header />
      <div className="App">
          {Data ?
        <div className="rating-tables">
          <OverallRating />
          <PositiveRatingTable />
          <NegativeRatingTable />
        </div>
          :<></>}
      </div>
    </>
)
}

export default Page2;