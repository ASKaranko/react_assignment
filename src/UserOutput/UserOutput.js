import React from 'react';
import './UserOuptput.css';
import UserInput from '../UserInput/UserInput';

const userOutput = (props) => {
	return (
			<div className="UserOutput">
				<UserInput change={props.change} value={props.name} />
				<p>User name: {props.name}</p>
				<p>Men occasionally stumble over the truth, but most of them
					pick themselves up and hurry off as if nothing had happened</p>
			</div>
	);
}

export default userOutput;