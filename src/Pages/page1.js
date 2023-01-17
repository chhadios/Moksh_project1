import React from 'react';
import ReviewsBarChart from '../Components/barGraph_Reviews';
import LineChartRatings from '../Components/LineChartRatings';
import Header from '../Components/header';
import ConcernsChart from '../Components/concernChart';
import AgeRangeChart from '../Components/ageChart';
const Page1 = () => {
    const W = JSON.parse(localStorage.getItem('WeeklyData'))
    const RawData = JSON.parse(localStorage.getItem('RawData'));
    const ConcernChart = []
    const FinalConcernChart = {
        positive: [],
        negetive: [],
        name: []
    }
    const AgeChart = []
    const FinalAgeChart = {
        positive: [],
        negetive: [],
        AgeRange: []
    }
    console.log(ConcernChart)
    function setdata() {
        for (var i = 0; i < RawData.length - 1; i++) {
            var idx = ConcernChart.findIndex(x => x.name === RawData[i].SkinConcerns);
            if (idx > -1) {
                if (RawData[i].Sentiment === "Positive") {
                    ConcernChart[idx].positive++;
                } else {
                    ConcernChart[idx].negetive++;
                }
            } else {
                if (RawData[i].SkinConcerns != "") {


                    if (RawData[i].Sentiment === "Positive") {
                        ConcernChart.push(
                            {
                                name: RawData[i].SkinConcerns,
                                positive: 1,
                                negetive: 0
                            }
                        )
                    } else {
                        ConcernChart.push(
                            {
                                name: RawData[i].SkinConcerns,
                                positive: 0,
                                negetive: 1
                            }
                        )

                    }
                }
            }
        }
        for (var i = 0; i < RawData.length - 1; i++) {
            var idx = AgeChart.findIndex(x => x.AgeRange === RawData[i].AgeRange);
            if (idx > -1) {
                if (RawData[i].Sentiment === "Positive") {
                    AgeChart[idx].positive++;
                } else {
                    AgeChart[idx].negetive++;
                }
            } else {
                if (RawData[i].AgeRange != "") {


                    if (RawData[i].Sentiment === "Positive") {
                        AgeChart.push(
                            {
                                AgeRange: RawData[i].AgeRange,
                                positive: 1,
                                negetive: 0
                            }
                        )
                    } else {
                        AgeChart.push(
                            {
                                AgeRange: RawData[i].AgeRange,
                                positive: 0,
                                negetive: 1
                            }
                        )

                    }
                }
            }
        }
        for (var i = 0; i < ConcernChart.length; i++) {
            FinalConcernChart.name.push(ConcernChart[i].name)
            FinalConcernChart.positive.push(ConcernChart[i].positive)
            FinalConcernChart.negetive.push(-ConcernChart[i].negetive)
        }
        AgeChart.sort((a, b) => {
            return parseInt(b.AgeRange.slice(-2)) - parseInt(a.AgeRange.slice(-2));
          });
          console.log(AgeChart)
        for (var i = 0; i < AgeChart.length; i++) {
            FinalAgeChart.AgeRange.push(AgeChart[i].AgeRange)
            FinalAgeChart.positive.push(AgeChart[i].positive)
            FinalAgeChart.negetive.push(-AgeChart[i].negetive)
        }

    }
    setdata();
    return (
        <>
            <Header />
            {W ?
                <div className='app_container'>
                    <ReviewsBarChart WeeklyData={W} />
                    <LineChartRatings WeeklyData={W} />
                    <ConcernsChart Data={FinalConcernChart} />
                    <AgeRangeChart Data={FinalAgeChart} />
                </div>
                : <></>}
        </>
    )
}

export default Page1