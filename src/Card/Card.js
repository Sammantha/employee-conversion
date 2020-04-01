import React from 'react';
import Heading from '../Heading/Heading';
import Data from '../Data/Data';

const Card = (props) => {
	return (
		<div className="card">
			<Heading 
				id={props.id}
		        name={props.name}
		        job={props.job}
		        photo={props.photo}
			/>
			<Data />
		</div>
	);
}

export default Card;