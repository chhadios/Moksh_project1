import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const VerifiedPurchasesChart = ({Data}) => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Verified Chart',
            style: {
                color: 'black',
                fontWeight: 'bold',
                fontSize:"20px"
            }
        },
        xAxis: {
            categories: ['Verified', 'Not Verified']
        },
        yAxis: {
            min: 0,
            title: {
                text: '%Ratings',
                style: {
                    color: 'Black',
                    fontWeight: 'bold',
                    fontSize:"20px"
                }
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: '5',
            data: [Data.verified.five,Data.notVerified.five]
        }, {
            name: '4',
            data: [Data.verified.four, Data.notVerified.four]
        },{
            name: '3',
            data: [Data.verified.three,Data.notVerified.three]
        }, {
            name: '2',
            data: [Data.verified.two, Data.notVerified.two]
        }, {
            name: '1',
            data: [Data.verified.one, Data.notVerified.one]
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

export default VerifiedPurchasesChart