import React from 'react';
import ReviewsBarChart from '../Components/barGraph_Reviews';
import LineChartRatings from '../Components/LineChartRatings';
import Header from '../Components/header';

const Page1 = () => {
    const W=JSON.parse(localStorage.getItem('WeeklyData'))
    console.log(W)
    return (
        <>
        <Header/>
        {W ? 
        <div className='app_container'>
        <ReviewsBarChart WeeklyData={W}/>
        <LineChartRatings WeeklyData={W}/>
        </div>
        :<></>}
        </>
    )
}

export default Page1


     
    


   