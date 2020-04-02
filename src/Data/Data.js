import React from 'react';
import Graph from '../Graph/Graph';
import Numbers from '../Numbers/Numbers';

const data = require('../logs.json');

const Data = props => {

	const totals = employeeTotals(props.id);

	return (
		<div>
			<Graph />
			<Numbers impressions = {totals.impressions} conversions={totals.conversions} revenue={totals.revenue} />
		</div>
	);
}

//Iterate through the JSON data and keep only the data that belongs to this employee
const employeeData = id => {
	const dataArray = [...data];
	return dataArray.filter(point => point.user_id === id);
}

//Get the totals from the employee-specific data
const employeeTotals = id => {
	const filtered = employeeData(id);
	let impressions = 0;
	let conversions = 0;
	let revenue = 0;

	filtered.map(point => {
		if (point.type === 'impression') {
			impressions++;
		} else if (point.type === 'conversion') {
			conversions++;
			revenue = revenue + point.revenue;
		}
	});
	
	revenue = revenue.toFixed(0);


	return {
		"impressions": impressions,
		"conversions": conversions,
		"revenue": revenue
	};
}

export default Data;