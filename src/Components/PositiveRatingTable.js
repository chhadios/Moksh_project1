import React from "react";

const PositiveRatingTable = ({FinalData}) => {

  return (
    <div className="table-cont">
      <h1>Top Positive Rating Drivers</h1>
      <table>
        <thead>
          <tr>
            <th>Overall category</th>
            <th>Area</th>
            <th>Issue</th>
            <th>Review Count</th>
            <th>Rating Impact</th>
            <th>Weight in Positive Bucket</th>
          </tr>
        </thead>
        <tbody>
          {FinalData.map((item, index) => (
            <tr key={index}>
              <td>{item.text1}</td>
              <td>{item.text2}</td>
              <td>{item.text3}</td>
              <td>{item.reviewCount}</td>
              <td>100</td>
              <td>10%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PositiveRatingTable;
