import React, { useContext } from "react";
import Card from "./shared/Card";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm({}) {
	const [text, setText] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const [rating, setRating] = useState(10);
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext);

	//use effect takes two arguments, one function,
	// other if needs to load evertime or it needs to load just one time
	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setRating(feedbackEdit.item.rating);
			setText(feedbackEdit.item.text);
		}
	}, [feedbackEdit]);
	//handle text change event
	const handleTextChange = (e) => {
		//check if text is zero
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setMessage("Text must be atleast 10 characters");
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedbackItem = {
				text,
				rating,
			};

			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedbackItem);
			} else {
				addFeedback(newFeedbackItem);
			}

			//clear text box
			setText("");
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />

				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						value={text}
						placeholder="Write a review"
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>

				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
