import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
// import WeeklyData from '../data';


const LineChartRatings = ({WeeklyData}) => {
    const options_lineChart = {
        chart: {
            renderTo: 'container',
            type: 'line',
            height:600
        },
        title: {
            text: 'Number Of Reviews by Ratings',
            style: {
                color: 'Black',
                fontWeight: 'bold',
                fontSize:"25px"
            }
        },
        yAxis:{
            opposite: false,
            title:{
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize:"20px"
                },
                text:"#Ratings"
            },
            itemStyle: {
                fontSize:'20px',
                font: '20pt Trebuchet MS, Verdana, sans-serif',
                color: '#A0A0A0'
             },
        },
        legend: {
            enabled:true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            width:100,
            itemStyle: {
                fontSize:'20px',
                font: '20pt Trebuchet MS, Verdana, sans-serif',
                color: '#A0A0A0'
             },
             itemHoverStyle: {
                color: 'black'
             },
             itemHiddenStyle: {
                color: '#444'
             }
        },
    
        series: [{
            name: "5star",
            data: WeeklyData.fiveStar,
        },{
            name: "4star",
            data: WeeklyData.fourStar,
        },{
            name: "3star",
            data: WeeklyData.threeStar,
        },{
            name: "2star",
            data: WeeklyData.twoStar,
        },{
            name: "1star",
            data: WeeklyData.oneStar,
        }]
    };

    return (
        <>
            <div className='pageOne_barchart_container'>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options_lineChart}
                />
            </div>
        </>
    )
}

export default LineChartRatings