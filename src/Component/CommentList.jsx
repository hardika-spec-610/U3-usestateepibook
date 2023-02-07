import { Alert, Button, Card, ListGroup } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const CommentList = ({ commentsListToShow, updateDelete }) => {
  const deleteComment = async (commentId) => {
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
        // alert("Comment was deleted successfully!");
        <Alert variant="danger">Delete comment</Alert>;
        updateDelete();
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {commentsListToShow.map((singleComment) => (
        <Card key={singleComment._id}>
          <Card.Header>Author: {singleComment.author}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Comment: {singleComment.comment}</ListGroup.Item>
            <ListGroup.Item>Rating: {singleComment.rate}</ListGroup.Item>
            <ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="danger"
                  onClick={() => {
                    deleteComment(singleComment._id);
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
  );
};
export default CommentList;
