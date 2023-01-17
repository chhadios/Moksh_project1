import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const PieChart = ({Data}) => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            width:600
        },
        title: {
            text: Data.name,
            align: 'left'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            colorByPoint: true,
            data: [{
                name: Data.positiveName,
                y: (Data.positive*100)/(Data.positive+Data.negetive),
    
            }, {
                name: Data.negetiveName,
                y: (Data.negetive*100)/(Data.positive+Data.negetive)
            }]
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

export default PieChart