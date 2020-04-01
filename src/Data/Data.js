import React from 'react';
import Graph from '../Graph/Graph';
import Numbers from '../Numbers/Numbers';

const Data = () => {

	const style = {
		display: "inline-block"
	};

	return (
		<div>
			<Graph style={style}/>
			<Numbers style={style}/>
		</div>
	);
}

export default Data;