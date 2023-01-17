import React,{useEffect,useState} from "react";

const OverallRating = ({OverallData}) => {
  return (
    <div className="table-cont">
      <h1>Overall Category Ratings</h1>
      <table>
        <thead>
          <tr>
            <th>Sentiment</th>
            <th>Overall Category</th>
            <th>Review Count</th>
            <th>Ratings Impact</th>
          </tr>
        </thead>
        <tbody>
          {OverallData.map((item, index) => (
            <tr key={index}>
              <td>Positive</td>
              <td>{item.text}</td>
              <td>{item.positiveRating}</td>
              <td>{item.positiveRatingImp}</td>
            </tr>
          ))}
          {OverallData.map((item, index) => (
            <tr key={index}>
              <td>Negetive</td>
              <td>{item.text}</td>
              <td>{item.negetiveRating}</td>
              <td>{item.negetiveRatingImp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverallRating;
