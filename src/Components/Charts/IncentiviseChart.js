import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const IncentivizedChart = ({Data}) => {
    const options = {
        chart: {
            type: 'column',
            height:500
        },
        title: {
            text: 'Incentivized VS Non Incentivized',
            style: {
                color: 'Black',
                fontWeight: 'bold',
                fontSize:"25px",
                textAlign:"left",
                marginBottom:"10px"
            },
        },
        xAxis: {
            categories: Data.rating,
            crosshair: true,
            title: {
                text: "Ratings",
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize:"20px"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent Incentivized and Non Incentivised',
                style: {
                    color: 'Black',
                    fontWeight: 'bold',
                    fontSize:"20px"
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px"></span>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{point.y:.1f}% </td>' +
                '<td style="padding:0"><b>{series.name}, &nbsp;</td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Incentivized',
            data: Data.incentivized
    
        }, {
            name: 'Non Incentivized',
            data: Data.notIncentivized
    
        }]
        
    };

    return (
        <>
            <div className='pageOne_barchart_container'>
                <HighchartsReact
                    className="pageOne_barchart"
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </>
    )
}

export default IncentivizedChart