import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import WeeklyData from '../data';
import ReviewsBarChart from '../Components/barGraph_Reviews';
import LineChartRatings from '../Components/LineChartRatings';
import Header from '../Components/header';
const Page1 = () => {

    return (
        <>
        <Header/>
        <div className='app_container'>
        <ReviewsBarChart/>
        <LineChartRatings/>
        </div>


        </>
    )
}

export default Page1