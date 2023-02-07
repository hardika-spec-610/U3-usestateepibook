import { Component } from "react";
import { Alert, Button, Card, ListGroup, Spinner } from "react-bootstrap";
import AddComments from "./AddComments";
import { MdDelete } from "react-icons/md";

class CommentArea extends Component {
  state = {
    comment: [],
    isLoading: true, // now I want to bind the UI with it, the Spinner!
    isError: false,
  };

  getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzU3NzY5MjAsImV4cCI6MTY3Njk4NjUyMH0.iZkEz1pTQD0UwdN8qkuX43GlGjgs5ctxQ9BiOCPjau4",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", [data]);
        console.log("data2", data);
        this.setState({ comment: data, isLoading: false });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  deleteComment = async (commentId) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzU3NzY5MjAsImV4cCI6MTY3Njk4NjUyMH0.iZkEz1pTQD0UwdN8qkuX43GlGjgs5ctxQ9BiOCPjau4",
          },
        }
      );
      if (response.ok) {
        this.setState({ isLoading: false });
        this.updateCommentPost();
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  updateCommentPost = () => {
    this.getComments();
  };
  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PREVIOUS PROPS", prevProps);
    console.log("CURRENT PROPS", this.props);
    if (prevProps.bookAsin !== this.props.bookAsin) {
      this.getComments();
    }
  }

  render() {
    return (
      <div>
        <h4>Comments</h4>
        {this.state.isLoading && ( // isLoading is true or false
          <Spinner animation="border" variant="success" />
        )}
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error!😨</Alert>
        )}
        {this.props.bookAsin === "" ? (
          "Please select a book to view the comments.."
        ) : (
          <>
            {this.props.bookAsin !== "" && (
              <>
                {this.state.comment.length > 0 && this.state.comment ? (
                  <>
                    {this.state.comment.map((singleComment) => (
                      <Card key={singleComment._id}>
                        <Card.Header>
                          Author: {singleComment.author}
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            Comment: {singleComment.comment}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Rating: {singleComment.rate}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <ListGroup.Item>
                              <Button
                                variant="danger"
                                onClick={() => {
                                  this.deleteComment(singleComment._id);
                                }}
                              >
                                <MdDelete />
                              </Button>
                            </ListGroup.Item>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    ))}
                  </>
                ) : (
                  "No comments available"
                )}
              </>
            )}
          </>
        )}

        {this.props.bookAsin !== "" && (
          <AddComments
            bookAsin={this.props.bookAsin}
            updatePost={this.updateCommentPost}
          ></AddComments>
        )}
      </div>
    );
  }
}

export default CommentArea;
