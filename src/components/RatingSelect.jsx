import React, { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
	// NOTE: We don't need local state here as it's a duplicate of parent state
	// also no real need for useEffect or context
	// useEffect(() => {
	//   select(feedbackEdit.item.rating)
	// }, [feedbackEdit])
	const [selected, setSelected] = useState(10);
	const { feedbackEdit } = useContext(FeedbackContext);

	const handleChange = (e) => {
		setSelected(+e.currentTarget.value);
		select(+e.currentTarget.value);
	};
	// NOTE: simplified with iteration
	//set Select rating from feedbackEdit
	useEffect(() => {
		setSelected(feedbackEdit.item.rating);
	}, [feedbackEdit]);

	return (
		<ul className="rating">
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type="radio"
						id={`num${i + 1}`}
						name="rating"
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
}

export default RatingSelect;
