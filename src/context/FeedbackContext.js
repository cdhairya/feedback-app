import { createContext, useState } from "react";

// Firstly, create constant for context
const FeedbackContext = createContext();

// We have to wrap everything with Provider that's why we pass children as prop.
// We import this Provider where we need to use context.
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback from context",
      rating: 10,
    },
  ]);

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    console.log(typeof id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    // Passing parameter value(object) as feedback
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
