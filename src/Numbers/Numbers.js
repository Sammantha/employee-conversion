import React from 'react';

const Numbers = props => {
	return (
		<div className="numbers">
			<h5 className="orange">{props.impressions}</h5>
			<p>impressions</p>
			<h5 className="blue">{props.conversions}</h5>
			<p>conversions</p>
			<h4 className="green">${props.revenue}</h4>
		</div>
	);
}

export default Numbers;