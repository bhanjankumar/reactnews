import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {

    
	render() {
        const {filterLineChart} = this.props;
        console.log(filterLineChart);
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: ""
			},
			axisY: {
				title: "Votes",
				includeZero: false,
			},
			axisX: {
				title: "ID",
                prefix: "",
			},
			data: [{
				type: "line",
				toolTipContent: "{x}:{y}",
				dataPoints: filterLineChart
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	}
}

export default LineChart;                           