import React,{useState,useEffect} from "react";
import Header from "../Components/header";
import OverallRating from "../Components/OverallRating";
import PositiveRatingTable from "../Components/PositiveRatingTable";
import NegativeRatingTable from "../Components/NegativeRatingTable";
const Page2 = () => {
  const Data = JSON.parse(localStorage.getItem('DetailedData'))
  const RawData = JSON.parse(localStorage.getItem('RawData'))
  const [OverallTableData, setOverallTableData] = useState([])
  //Negetive Table
  const [OverallData, setOverallData] = useState([])
  const [NegetiveTableFinalData, setNegetiveTableFinalData] = useState([])

  //Positive Table
  const [OverallPositiveData, setOverallPositiveData] = useState([])
  const [PositiveTableFinalData, setPositiveTableFinalData] = useState([])

  const setData = () => {
    for (var i = 0; i < Data.length; i++) {
      for (var j = 0; j < Data[i].Level2.length; j++) {
        for (var k = 0; k < Data[i].Level2[j].Level3.length; k++) {
          for (var m = 0; m < Data[i].Level2[j].Level3[k].Level4.length; m++) {
            var index = RawData.findIndex(x => x.L4ID === Data[i].Level2[j].Level3[k].Level4[m].id);
            if (RawData[index].Sentiment === "Negative") {
              var index2 = OverallData.findIndex(x => x.id === Data[i].Level2[j].Level3[k].id);
              if (index2 === -1) {
                OverallData.push({
                  id: Data[i].Level2[j].Level3[k].id,
                  text3: Data[i].Level2[j].Level3[k].text,
                  text2: Data[i].Level2[j].text,
                  text1: Data[i].text,
                  reviewCount: 1
                })
              } else {
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

    for (var i = 0; i < 11; i++) {
      NegetiveTableFinalData.push(OverallData[i])
    }

    for(var i =0;i<RawData.length-1;i++){
      var index = OverallTableData.findIndex(x => x.id === RawData[i].L1ClusterID);
      if(index>-1){
        if(RawData[i].Sentiment==="Positive"){
          OverallTableData[index].positiveRating++;
        }else{
          OverallTableData[index].negetiveRating++;
        }
      }else{
        if(RawData[i].Sentiment==="Positive"){
          OverallTableData.push(
            {
              id:RawData[i].L1ClusterID,
              text:RawData[i].L1Cluster,
              positiveRating: 1,
              negetiveRating:0,
              positiveRatingImp:100,
              negetiveRatingImp:100
            }
          )
        }else{
          OverallTableData.push(
            {
              id:RawData[i].L1ClusterID,
              text:RawData[i].text,
              positiveRating:0,
              negetiveRating:1,
              positiveRatingImp:100,
              negetiveRatingImp:100
            }
          )
        }
      }
    }

    for (var i = 0; i < Data.length; i++) {
      for (var j = 0; j < Data[i].Level2.length; j++) {
          for (var k = 0; k < Data[i].Level2[j].Level3.length; k++) {
            for(var m=0;m<Data[i].Level2[j].Level3[k].Level4.length;m++){
              var index = RawData.findIndex(x => x.L4ID === Data[i].Level2[j].Level3[k].Level4[m].id);
              if(RawData[index].Sentiment==="Positive"){
                var index2 = OverallPositiveData.findIndex(x => x.id === Data[i].Level2[j].Level3[k].id); ;
                if(index2==-1){
                  OverallPositiveData.push({
                    id:Data[i].Level2[j].Level3[k].id,
                    text3:Data[i].Level2[j].Level3[k].text,  
                    text2:Data[i].Level2[j].text,
                    text1:Data[i].text,
                    reviewCount:1   
                  })
                }else{
                  OverallPositiveData[index2].reviewCount++
                }
              }
            }
          }
        }
    }
  
    OverallPositiveData.sort((a, b) => {
      return b.reviewCount - a.reviewCount;
  });
  
  for(var i=0;i<11;i++){
    PositiveTableFinalData.push(OverallPositiveData[i])
  }
  
  }

  setData()
 


  return (
    <>
      <Header />
      <div className="App">
        {Data ?
          <div className="rating-tables">
            <OverallRating OverallData={OverallTableData}/>
            <PositiveRatingTable FinalData={PositiveTableFinalData}/>
            <NegativeRatingTable FinalData={NegetiveTableFinalData} />
          </div>
          : <></>}
      </div>
    </>
  )
}

export default Page2;