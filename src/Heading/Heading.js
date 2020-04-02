import React from 'react';

const Heading = (props) => {
	return (
		<div className="heading">
			<div className="photo">
				{avatar(props)}
			</div>
			<div className="details">
				<h1>{props.name}</h1>
				<h3>{props.job}</h3>
			</div>
		</div>
	);
}

const avatar = (args) => {
	if (args.photo) {
		return <img src={args.photo} alt="Employee Photo"/>;
	} else {
		return <div className="initial"><h1>{args.name[0]}</h1></div>;
	}
}

export default Heading;