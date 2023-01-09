import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import WeeklyData from '../data';

const options = {
    chart: {
        type: 'column',
        height:600,
        style:{
            backgroundColor:"black"
        },
    },
    title: {
        text: 'Number Of Reviews Weekly Aggregation',
        style: {
            color: 'Black',
            fontWeight: 'bold',
            fontSize:"25px",
            textAlign:"left",
            marginBottom:"10px"
        },
    },
    yAxis:{
        title:{
            text:"#Reviews",
            style: {
                color: 'Black',
                fontWeight: 'bold',
                fontSize:"20px"
            }
        },
        opposite: false
    },

    series: [{
        name: "#Reviews",
        data: WeeklyData.data,
        tooltip: {
            valueDecimals: 2
        }
    }],
    
};

const ReviewsBarChart = () => {

    return (
        <>
            <div className='pageOne_barchart_container'>
                <HighchartsReact
                    className="pageOne_barchart"
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </div>
        </>
    )
}

export default ReviewsBarChart