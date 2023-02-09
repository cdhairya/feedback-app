import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/about", element: <AboutPage /> },
    {
      path: "/",
      element: (
        <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
          <AboutIconLink />
        </>
      ),
    },
  ]);

  return (
    <FeedbackProvider>
      <Header text="Feedback UI" />
      <div className="container">
        <RouterProvider router={router}>
          {/* <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> */}
        </RouterProvider>
      </div>
    </FeedbackProvider>
  );
}

export default App;
