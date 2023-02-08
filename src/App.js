import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log(typeof id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const router = createBrowserRouter([
    { path: "/about", element: <AboutPage /> },
    {
      path: "/",
      element: (
        <>
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
      ),
    },
  ]);

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <RouterProvider router={router}>
          {/* <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> */}
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
