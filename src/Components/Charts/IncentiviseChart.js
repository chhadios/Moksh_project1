import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const IncentivizedChart = ({Data}) => {
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Incentivized Chart',
            style: {
                color: 'black',
                fontWeight: 'bold',
                fontSize:"20px"
            }
        },
        xAxis: {
            categories: ['Incentivized', 'Not Incentivised']
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
            data: [Data.incentivised.five,Data.notIncentivized.five]
        }, {
            name: '4',
            data: [Data.incentivised.four, Data.notIncentivized.four]
        },{
            name: '3',
            data: [Data.incentivised.three,Data.notIncentivized.three]
        }, {
            name: '2',
            data: [Data.incentivised.two, Data.notIncentivized.two]
        }, {
            name: '1',
            data: [Data.incentivised.one, Data.notIncentivized.one]
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