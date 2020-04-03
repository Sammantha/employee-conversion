import React from 'react';
import { LineChart, Line, Tooltip } from 'recharts';

const Graph = props => {

	const allData = props.data.sort(function(x, y){
    	return x.time - y.time;
	});

	const data = allData.slice(allData.length - 15, allData.length - 1);

	const divStyle = {
		margin: 'auto auto'
	};

	return (
		<div className="graph">
			<LineChart
		        width={300}
		        height={130}
		        data={data}
		        style={divStyle}
		    	>
		        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
	     	</LineChart>
		</div>
	);
}

export default Graph;