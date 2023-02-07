import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComments = ({ bookAsin }) => {
  const [commentsObject, setCommentsObject] = useState({
    comment: [],
    rate: "",
    elementId: bookAsin,
  });
  const sendComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(commentsObject),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzU3NzY5MjAsImV4cCI6MTY3Njk4NjUyMH0.iZkEz1pTQD0UwdN8qkuX43GlGjgs5ctxQ9BiOCPjau4",
          }),
        }
      );
      console.log("post res", response);
      if (response.ok) {
        alert("Submitted successfully");
        // updatePost();
        setCommentsObject({ comment: [], rate: "" });
      } else {
        alert("problem accepting your comment :(");
        console.log("elementID", commentsObject.elementId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          sendComment();
        }}
      >
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            placeholder="Send your comment"
            value={commentsObject.comment}
            onChange={(event) => {
              setCommentsObject({
                ...commentsObject,
                comment: event.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Rating 1-5"
            value={commentsObject.rate}
            onChange={(event) => {
              setCommentsObject({
                ...commentsObject,
                rate: event.target.value,
              });
            }}
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddComments;
