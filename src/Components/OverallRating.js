import React,{useEffect,useState} from "react";

const Data=JSON.parse(localStorage.getItem('RawData'))
var OverallData=[{}];
const setData=()=>{
  for(var i =0;i<Data.length-1;i++){
    var index = OverallData.findIndex(x => x.id === Data[i].L1ClusterID);
    if(index>-1){
      if(Data[i].Sentiment==="Positive"){
        OverallData[index].positiveRating++;
      }else{
        OverallData[index].negetiveRating++;
      }
    }else{
      if(Data[i].Sentiment==="Positive"){
        OverallData.push(
          {
            id:Data[i].L1ClusterID,
            text:Data[i].L1Cluster,
            positiveRating: 1,
            negetiveRating:0,
            positiveRatingImp:100,
            negetiveRatingImp:100
          }
        )
      }else{
        OverallData.push(
          {
            id:Data[i].L1ClusterID,
            text:Data[i].text,
            positiveRating:0,
            negetiveRating:1,
            positiveRatingImp:100,
            negetiveRatingImp:100
          }
        )
      }
    }
  }
}
  setData()
const OverallRating = () => {
  console.log(OverallData)
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
