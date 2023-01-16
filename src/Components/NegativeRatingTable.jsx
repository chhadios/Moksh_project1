import React from "react";


const Data = JSON.parse(localStorage.getItem('DetailedData'))
const RawData = JSON.parse(localStorage.getItem('RawData'))
 
var OverallData = [];
var FinalData = [];
const setData = () => {
  for (var i = 0; i < Data.length; i++) {
    for (var j = 0; j < Data[i].Level2.length; j++) {
        for (var k = 0; k < Data[i].Level2[j].Level3.length; k++) {
          for(var m=0;m<Data[i].Level2[j].Level3[k].Level4.length;m++){
            var index = RawData.findIndex(x => x.L4ID === Data[i].Level2[j].Level3[k].Level4[m].id);
            if(RawData[index].Sentiment==="Negative"){
              var index2 = OverallData.findIndex(x => x.id === Data[i].Level2[j].Level3[k].id);
              if(index2===-1){
                OverallData.push({
                  id:Data[i].Level2[j].Level3[k].id,
                  text3:Data[i].Level2[j].Level3[k].text,  
                  text2:Data[i].Level2[j].text,
                  text1:Data[i].text,
                  reviewCount:1     
                })
              }else{
                OverallData[index2].reviewCount++
              }
            }
          }
        }
      }
  }

  OverallData.sort((a, b) => {
    return b.reviewCount - a.reviewCount;
});

for(var i=0;i<11;i++){
  FinalData.push(OverallData[i])
}
console.log(FinalData)
}
setData()
console.log(OverallData)
const NegativeRatingTable = () => {


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
