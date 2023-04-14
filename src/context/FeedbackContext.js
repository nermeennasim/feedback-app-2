import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

//we need to create provider to pass parameters or children

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "This is item 1 from Context",
			rating: 4,
		},
		{
			id: 2,
			text: "This is item 2 from Context",
			rating: 7,
		},
		{
			id: 3,
			text: "This is item 3 from Context",
			rating: 9,
		},
	]);

	//create feedbackedit State
	const [feedbackEdit, setfeedbackEdit] = useState({
		//an empty object , this object will be filled in by item clicked
		item: {},
		//a boolean flag to find out item was clicked or not
		edit: false,
	});
	//define function deleteFeeback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	//define addFeedback// instaed of defining it in App.js we are sending it as globall context
	const addFeedback = (newFeedback) => {
		//create new id
		newFeedback.id = uuidv4();
		//set feedback empty array
		setFeedback([newFeedback, ...feedback]);
		//now we call spread operator

		console.log(newFeedback);
	};

	//Update Feedback Item

	const updateFeedback = (id, newItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...newItem } : item))
		);
	};

	//edit feedback function , set item to be updated
	const editFeedback = (item) => {
		setfeedbackEdit({
			item,
			edit: true,
		});
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
