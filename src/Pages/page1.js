import React from 'react';
import ReviewsBarChart from '../Components/Charts/barGraph_Reviews';
import LineChartRatings from '../Components/Charts/LineChartRatings';
import Header from '../Components/header';
import ConcernsChart from '../Components/Charts/concernChart';
import AgeRangeChart from '../Components/Charts/ageChart';
import IncentivizedChart from '../Components/Charts/IncentiviseChart';
import VerifiedPurchasesChart from '../Components/Charts/verifiedPurchaseChart';
import PieChart from '../Components/Charts/pieChart';

const Page1 = () => {
    const W = JSON.parse(localStorage.getItem('WeeklyData'))
    const RawData = JSON.parse(localStorage.getItem('RawData'));

    //Skin Concern Chart Data
    const ConcernChart = []
    const FinalConcernChart = {
        positive: [],
        negetive: [],
        name: []
    }

    // Age Group Chart Data
    const AgeChart = []
    const FinalAgeChart = {
        positive: [],
        negetive: [],
        AgeRange: []
    }

    // Incentivised Chart Data
    const IncentivisedChart = {
        incentivised:{
            five:0,
            four:0,
            three:0,
            two:0,
            one:0
        },
        notIncentivized:{
            five:0,
            four:0,
            three:0,
            two:0,
            one:0
        }
    }

    // Verified Purchase Chart Data
    const VerifiedPurchaseChart = {
        verified:{
            five:0,
            four:0,
            three:0,
            two:0,
            one:0
        },
        notVerified:{
            five:0,
            four:0,
            three:0,
            two:0,
            one:0
        }
    }

    // Pie Chart data
    var AgePiechartData = {
        positive: 0,
        negetive: 0,
        name: "With and without Age Range",
        positiveName: "with Age Range",
        negetiveName: "without Age Range"
    }
    var ConcernPiechartData = {
        positive: 0,
        negetive: 0,
        name: "With and without Skin Concern",
        positiveName: "with Skin Concern Range",
        negetiveName: "without SkinConcern Range"
    }
    var IncentivizedPieChartData = {
        positive: 0,
        negetive: 0,
        name: "Incentivized and Not Incentivized",
        positiveName: "Incentivized",
        negetiveName: "Not Incentivized"
    }
    var VerifiedPieChartData = {
        positive: 0,
        negetive: 0,
        name: "Verified and Not Verified",
        positiveName: "Verified",
        negetiveName: "Not Verified"
    }

    function setdata() {

        //Skin Concern Chart Data     
        for (var i = 0; i < RawData.length - 1; i++) {
            var idx = ConcernChart.findIndex(x => x.name === RawData[i].SkinConcerns);
            if (RawData[i].SkinConcerns != "") {
                ConcernPiechartData.positive++;
            } else {
                ConcernPiechartData.negetive++;
            }
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
        //Adding Data in final State
        for (var i = 0; i < ConcernChart.length; i++) {
            FinalConcernChart.name.push(ConcernChart[i].name)
            FinalConcernChart.positive.push(ConcernChart[i].positive)
            FinalConcernChart.negetive.push(-ConcernChart[i].negetive)
        }

        // Age Group Chart Data      
        for (var i = 0; i < RawData.length - 1; i++) {
            var idx = AgeChart.findIndex(x => x.AgeRange === RawData[i].AgeRange);
            if (RawData[i].AgeRange != "") {
                AgePiechartData.positive++;
            } else {
                AgePiechartData.negetive++;
            }
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

        //Adding Data in final State
        AgeChart.sort((a, b) => {
            return parseInt(b.AgeRange.slice(-2)) - parseInt(a.AgeRange.slice(-2));
        });
        for (var i = 0; i < AgeChart.length; i++) {
            FinalAgeChart.AgeRange.push(AgeChart[i].AgeRange)
            FinalAgeChart.positive.push(AgeChart[i].positive)
            FinalAgeChart.negetive.push(-AgeChart[i].negetive)
        }

        // Incentivised Chart Data
        for (var i = 0; i < RawData.length - 1; i++) {
            if (RawData[i].Incentivized == "Yes") {
                IncentivizedPieChartData.positive++;

                RawData[i].ReviewRating=="5"?IncentivisedChart.incentivised.five++:RawData[i].ReviewRating=="4"?
                IncentivisedChart.incentivised.four++:RawData[i].ReviewRating=="3"?
                IncentivisedChart.incentivised.three++:RawData[i].ReviewRating=="2"?
                IncentivisedChart.incentivised.two++:IncentivisedChart.incentivised.one++
            } else {
                IncentivizedPieChartData.negetive++;

                RawData[i].ReviewRating=="5"?IncentivisedChart.notIncentivized.five++:RawData[i].ReviewRating=="4"?
                IncentivisedChart.notIncentivized.four++:RawData[i].ReviewRating=="3"?
                IncentivisedChart.notIncentivized.three++:RawData[i].ReviewRating=="2"?
                IncentivisedChart.notIncentivized.two++:IncentivisedChart.notIncentivized.one++
            }
            
        }
        
        // Verified Purchase Chart Data
        for (var i = 0; i < RawData.length - 1; i++) {
            if (RawData[i].VerifiedPurchase == "Yes") {
                VerifiedPieChartData.positive++;

                RawData[i].ReviewRating=="5"?VerifiedPurchaseChart.verified.five++:RawData[i].ReviewRating=="4"?
                VerifiedPurchaseChart.verified.four++:RawData[i].ReviewRating=="3"?
                VerifiedPurchaseChart.verified.three++:RawData[i].ReviewRating=="2"?
                VerifiedPurchaseChart.verified.two++:VerifiedPurchaseChart.verified.one++
            } else {
                VerifiedPieChartData.negetive++;
                RawData[i].ReviewRating=="5"?VerifiedPurchaseChart.notVerified.five++:RawData[i].ReviewRating=="4"?
                VerifiedPurchaseChart.notVerified.four++:RawData[i].ReviewRating=="3"?
                VerifiedPurchaseChart.notVerified.three++:RawData[i].ReviewRating=="2"?
                VerifiedPurchaseChart.notVerified.two++:VerifiedPurchaseChart.notVerified.one++
            }

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
                    <div>
                        <div style={{ float: "right" }}>
                            <PieChart Data={ConcernPiechartData} />
                            <PieChart Data={VerifiedPieChartData} />
                        </div>
                        <div>
                            <PieChart  Data={AgePiechartData} />
                            <PieChart  Data={IncentivizedPieChartData} />
                        </div>
                    </div>
                    <ConcernsChart Data={FinalConcernChart} />
                    <AgeRangeChart Data={FinalAgeChart} />
                    <IncentivizedChart Data={IncentivisedChart} />
                    <VerifiedPurchasesChart Data={VerifiedPurchaseChart} />
                </div>
                : <></>}
        </>
    )
}

export default Page1