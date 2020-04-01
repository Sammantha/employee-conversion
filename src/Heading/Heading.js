import React from 'react';

const Heading = (props) => {
	return (
		<div className="heading">
			<div className="photo">
				<img src={props.photo} alt="Employee Photo" />
			</div>
			<div className="details">
				<h1>{props.name}</h1>
				<h3>{props.job}</h3>
			</div>
		</div>
	);
}

export default Heading;