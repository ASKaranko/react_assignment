import React from 'react';

const userInput = (props) => {
	const style = {
		width: '50%',
		background: '#fffd87',
		outline: 'none',
		padding: '10px 20px',
		borderRadius: '35px',
		border: '1px solid rgba(255, 255, 255, 0.5)',
		borderRight: '1px solid rgba(255, 255, 255, 0.2)',
		borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
		fontSize: '16px',
		letterSpacing: '1px',
		color: '#000',
		boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
		textAlign: 'center'
	};

	return (
			<input
					type="text"
					onChange={props.change}
					value={props.value}
					style={style}
			/>
	);
}

export default userInput;