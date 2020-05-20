import React from 'react';

const Result = (props) => {
	return (
		<div className="u-full-width result">
			<h4>Results:</h4>
			<p>The Loan Amount: ${props.amount}</p>
			<p>Months To Repay: {props.term}</p>
			<p>Total Payment: ${props.total}</p>
			<p>Monthly Payment: ${(props.total / props.term).toFixed(2)}</p>
		</div>
	);
};

export default Result;
