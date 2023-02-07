import { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";

class AddComments extends Component {
  state = {
    submit: false,
    commentsObject: {
      comment: [],
      rate: "",
      elementId: this.props.bookAsin,
    },
  };
  sendComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentsObject),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzU3NzY5MjAsImV4cCI6MTY3Njk4NjUyMH0.iZkEz1pTQD0UwdN8qkuX43GlGjgs5ctxQ9BiOCPjau4",
          }),
        }
      );
      console.log("post res", response);
      if (response.ok) {
        this.props.updatePost();
        this.setState({ submit: true });
        this.setState({
          commentsObject: {
            comment: [],
            rate: "",
          },
        });
      } else {
        alert("problem accepting your comment :(");
        console.log("elementID", this.state.commentsObject.elementId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <>
        {this.state.submit && <Alert variant="success">Comment added</Alert>}
        <Form
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={(e) => {
            // console.log('form is submitting...', e)
            e.preventDefault();

            this.sendComment();
          }}
        >
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              placeholder="Send your comment"
              value={this.state.commentsObject.comment}
              onChange={(event) => {
                this.setState({
                  commentsObject: {
                    ...this.state.commentsObject,
                    comment: event.target.value,
                  },
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
              value={this.state.commentsObject.rate}
              onChange={(event) => {
                this.setState({
                  commentsObject: {
                    ...this.state.commentsObject,
                    rate: event.target.value,
                  },
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
  }
}

export default AddComments;
