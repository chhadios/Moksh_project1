import Papa from "papaparse";
import axios from 'axios';


function convertToTimestamp(date) {
    const myDate = date.split("_");
    var newDate;
    switch(myDate[1]){
        case "Jan":
            newDate=new Date(`${myDate[2]}.01.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Feb":
            newDate=new Date(`${myDate[2]}.02.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Mar":
            newDate=new Date(`${myDate[2]}.03.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Apr":
            newDate=new Date(`${myDate[2]}.04.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "May":
            newDate=new Date(`${myDate[2]}.05.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Jun":
            newDate=new Date(`${myDate[2]}.06.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Jul":
            newDate=new Date(`${myDate[2]}.07.${myDate[0]}`)
            return newDate.getTime();;
            break;
        case "Aug":
            newDate=new Date(`${myDate[2]}.08.${myDate[0]}`)
            return newDate.getTime();;
            break;
        case "Sep":
            newDate=new Date(`${myDate[2]}.09.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Oct":
            newDate=new Date(`${myDate[2]}.10.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Nov":
            newDate=new Date(`${myDate[2]}.11.${myDate[0]}`)
            return newDate.getTime();
            break;
        case "Dec":
            newDate=new Date(`${myDate[2]}.12.${myDate[0]}`)
            return newDate.getTime();;
            break;
        default :
           break;
        
    }
    return 0;

};
// fetch the csv file 
const getposts = async () => {
    try {
        const response = await axios.get('week_summary.csv');
        const data = Papa.parse(response.data);
        setData(data.data);
    } catch (error) {
        throw error;
    }
}



getposts()
const WeeklyData = {
    data:[],
    oneStar:[],
    twoStar:[],
    threeStar:[],
    fourStar:[],
    fiveStar:[],
}
const setData = (csv) => {
    for (var i = csv.length-2; i >0; i--) {
        WeeklyData.data.push([convertToTimestamp(csv[i][0]),parseInt(csv[i][1])]);
        WeeklyData.oneStar.push( [convertToTimestamp(csv[i][0]),parseInt(csv[i][2])]);
        WeeklyData.twoStar.push( [convertToTimestamp(csv[i][0]),parseInt(csv[i][3])]);
        WeeklyData.threeStar.push( [convertToTimestamp(csv[i][0]),parseInt(csv[i][4])]);
        WeeklyData.fourStar.push( [convertToTimestamp(csv[i][0]),parseInt(csv[i][5])]);
        WeeklyData.fiveStar.push([convertToTimestamp(csv[i][0]),parseInt(csv[i][6])]);
    }
}

export default WeeklyData

