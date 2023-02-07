import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    if (text.trim() === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim() !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <h2>How would you like to rate our service with us?</h2>
      <RatingSelect select={(rating) => setRating(rating)} />
      <div className="input-group">
        <input
          type="text"
          placeholder="Write a review"
          value={text}
          onChange={handleTextChange}
        />
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
      </div>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
