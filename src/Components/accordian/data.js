import Papa from "papaparse";
import axios from 'axios';

// fetch the csv file 
const getposts = async () => {
  try {
    const response = await axios.get('data.csv');
    const data = Papa.parse(response.data);
    // console.log(data.data)
    setData(data.data);
  } catch (error) {
    throw error;
  }
}
getposts()

var Level1 = [
  // required Schema
  //
  // {
  //   id: "",
  //   text: "",
  //   reviewCount: 0,
  //   reviewRating: 0,
  //   sentiments:"",
  //   Level2: [
  //     {
  //       id: "",
  //       text: "",
  //       PhraseCount: 0,
  //       PhraseRating: 0,
  //       Level3: [
  //          {
  //            id:"",
  //            text:""
  //          }
  //       ]
  //     }
  //   ]
  // }
]

// getting the required data from the csv file 
const setData = (data) => {

  for (var i = 1; i < data.length - 1; i++) {

    // finding if the current level one id already exists in the state
    var index = Level1.findIndex(x => x.id === data[i][7]);

    // if found go to level 2
    if (index > -1) {

      var Level2index = Level1[index].Level2.findIndex(x => x.id === data[i][13]);

      if (Level2index > -1) {

        Level1[index].Level2[Level2index].Level3.push({
          id: data[i][19],
          text: data[i][20]
        })

      } else {

          Level1[index].Level2.push({
          id: data[i][13],
          text: data[i][14],
          PhraseCount: data[i][15],
          PhraseRating: data[i][18],
          Level3: [{
            id: data[i][19],
            text: data[i][20]
          }]
        });
      }
      // if the level one id not found than push it to the state
    } else {
      Level1.push(
        {
          id: data[i][7],
          text: data[i][8],
          reviewCount: data[i][10],
          reviewRating: data[i][12],
          sentiments: data[i][0],
          Level2: [{
            id: data[i][13],
            text: data[i][14],
            PhraseCount: data[i][15],
            PhraseRating: data[i][18],
            Level3: [{
              id: data[i][19],
              text: data[i][20]
            }]
          }]
        }
      )
    }

  }
}
export default Level1