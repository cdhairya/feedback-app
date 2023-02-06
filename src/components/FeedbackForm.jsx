import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <h2>How would you like to rate our service with us?</h2>
      {/* @todo - Rating select component */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Write a review"
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit">Send</button>
      </div>
    </Card>
  );
}

export default FeedbackForm;
