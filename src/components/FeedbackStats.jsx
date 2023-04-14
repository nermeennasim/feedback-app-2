import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	//calculate ratings Average
	let average =
		feedback.reduce((acc, current) => {
			return acc + current.rating;
		}, 0) / feedback.length;

	console.log(average);
	//fixed one digit and replace trailing zeros
	average = average.toFixed(1).replace(/[.,]0$/, "");
	//2nd arugment is zero in reduce function so that we are initializing with zero
	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
		</div>
	);
}

export default FeedbackStats;
