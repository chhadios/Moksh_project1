import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// see documentation for supported input formats
const data = JSON.parse(localStorage.getItem('RawData'));
const Data=[]

for(var i=0;i<data.length-1;i++){
   Data.push(
    {
        L2Cluster:data[i].L2Cluster,
        L3ReviewRating:parseInt(data[i].L3ReviewRating),
        L4Rating:parseInt(data[i].ReviewRating)
    }   
   )
}
console.log(Data[0].L3ReviewRating+Data[0].L3ReviewRating);
class PivotChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div >

            <PivotTableUI
                data={Data}
                // cols={["L3ReviewRating"]}
                // rows={["L2Cluster"]}
                plotlyOptions= {{width: 900, height: 500}}
                rendererName= {"Stacked Column Chart"}
                onChange={s => this.setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />
                        </div>

        );
    }
}
export default PivotChart;


