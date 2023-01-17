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
    const IncentivisedChart = []
    const FinalIncentivisedChart = {
        rating: [],
        incentivized: [],
        notIncentivized: []
    }

    // Verified Purchase Chart Data
    const VerifiedPurchaseChart = []
    const FinalVerifiedPurchaseChart = {
        rating: [],
        verified: [],
        notVerified: []
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
            if (RawData[i].Incentivized != "Yes") {
                IncentivizedPieChartData.positive++;
            } else {
                IncentivizedPieChartData.negetive++;
            }
            var idx = IncentivisedChart.findIndex(x => x.rating === RawData[i].ReviewRating);
            if (idx > -1) {
                RawData[i].Incentivized === 'Yes' ? IncentivisedChart[idx].incentivised++ : IncentivisedChart[idx].notIncentivised++
            } else {
                IncentivisedChart.push({
                    rating: RawData[i].ReviewRating,
                    incentivised: RawData[i].Incentivized === 'Yes' ? 1 : 0,
                    notIncentivised: RawData[i].Incentivized === 'No' ? 1 : 0
                })
            }

        }

        //Adding Data in final State
        IncentivisedChart.sort((a, b) => {
            return b.rating - a.rating;
        });

        for (var i = 0; i < IncentivisedChart.length; i++) {

            var percentIncent = (IncentivisedChart[i].incentivised * 100) / (IncentivisedChart[i].incentivised + IncentivisedChart[i].notIncentivised)
            FinalIncentivisedChart.rating.push(IncentivisedChart[i].rating)
            FinalIncentivisedChart.incentivized.push(percentIncent)
            FinalIncentivisedChart.notIncentivized.push(100 - percentIncent)
        }

        // Verified Purchase Chart Data
        for (var i = 0; i < RawData.length - 1; i++) {
            if (RawData[i].VerifiedPurchase != "Yes") {
                VerifiedPieChartData.positive++;
            } else {
                VerifiedPieChartData.negetive++;
            }
            var idx = VerifiedPurchaseChart.findIndex(x => x.rating === RawData[i].ReviewRating);
            if (idx > -1) {
                RawData[i].VerifiedPurchase === 'Yes' ? VerifiedPurchaseChart[idx].verified++ : VerifiedPurchaseChart[idx].notVerified++
            } else {
                VerifiedPurchaseChart.push({
                    rating: RawData[i].ReviewRating,
                    verified: RawData[i].VerifiedPurchase === 'Yes' ? 1 : 0,
                    notVerified: RawData[i].VerifiedPurchase === 'No' ? 1 : 0
                })
            }

        }

        //Adding Data in final State
        VerifiedPurchaseChart.sort((a, b) => {
            return b.rating - a.rating;
        });

        for (var i = 0; i < VerifiedPurchaseChart.length; i++) {
            var percentIncent = (VerifiedPurchaseChart[i].verified * 100) / (VerifiedPurchaseChart[i].verified + VerifiedPurchaseChart[i].notVerified)
            FinalVerifiedPurchaseChart.rating.push(VerifiedPurchaseChart[i].rating)
            FinalVerifiedPurchaseChart.verified.push(percentIncent)
            FinalVerifiedPurchaseChart.notVerified.push(100 - percentIncent)
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
                    <IncentivizedChart Data={FinalIncentivisedChart} />
                    <VerifiedPurchasesChart Data={FinalVerifiedPurchaseChart} />
                </div>
                : <></>}
        </>
    )
}

export default Page1