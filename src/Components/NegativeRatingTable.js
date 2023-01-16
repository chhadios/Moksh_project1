import React, { useEffect,useState } from "react";


// let OverallData = [];
// let FinalData = [];
const NegativeRatingTable = ({FinalData}) => {

  return (
    <div className="table-cont">
      <h1>Top Negative Rating Drivers</h1>
      <table>
        <thead>
          <tr>
            <th>Overall category</th>
            <th>Area</th>
            <th>Issue</th>
            <th>Review Count</th>
            <th>Rating Impact</th>
            <th>Weight in Negative Bucket</th>
          </tr>
        </thead>
        <tbody>
          {FinalData.map((item, index) => (
            <tr key={index}>
              <td>{item.text1}</td>
              <td>{item.text2}</td>
              <td>{item.text3}</td>
              <td>{item.reviewCount}</td>
              <td>10</td>
              <td>10%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NegativeRatingTable;
