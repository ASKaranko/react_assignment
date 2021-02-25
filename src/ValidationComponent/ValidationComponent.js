import React from "react";

const validationComponent = (props) => {
	const assessLength = (props) => {
		return props.length < 5 ? 'Text too short' : 'Text long enough';
	};

	return (
		<p>
			{assessLength(props)}
		</p>
	);
}

export default validationComponent;