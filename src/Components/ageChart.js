import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const AgeRangeChart = ({Data}) => {
    console.log(Data)
    const options = {
        chart: {
            type: 'bar',
            height:600

        },
        title: {
            text: 'Reviews based on Age Range',
            align: 'center',
            style: {
                color: 'Black',
                fontWeight: 'bold',
                fontSize:"25px"
            }
        },

        xAxis: [{
            categories: Data.AgeRange,
            reversed: false,
            title: {
                text: "Age Range",
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize:"20px"
                }
            },
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Positive Reviews'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: Data.AgeRange,
            linkedTo: 0,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Negative Reviews'
            }
        }],
        yAxis: {
            title: {
                text: "No of Reviews",
                style: {
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize:"20px"
                }
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value);
                }
            },
            accessibility: {
                description: 'Number of Reviews',
            }
        },
    
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ',' + this.point.category + '</b><br/>' +
                    'Reviews: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
            }
        },
    
        series: [{
            name: 'positive',
            data: Data.positive
        }, {
            name: 'negetive',
            data: Data.negetive
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

export default AgeRangeChart