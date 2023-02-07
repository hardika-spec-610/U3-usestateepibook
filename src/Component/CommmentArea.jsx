import { Alert, Spinner } from "react-bootstrap";
import AddComments from "./AddComments";
import { useState, useEffect } from "react";
import CommentList from "./CommentList";

const CommentArea = ({ bookAsin }) => {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
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
        setComment(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookAsin]);

  const updateCommentPost = () => {
    getComments();
  };

  return (
    <div>
      <h4>Comments</h4>
      {isLoading && ( // isLoading is true or false
        <Spinner animation="border" variant="success" />
      )}
      {isError && <Alert variant="danger">Aww snap, we got an error!😨</Alert>}
      {bookAsin === "" ? (
        "Please select a book to view the comments.."
      ) : (
        <>
          {bookAsin !== "" && <AddComments bookAsin={bookAsin}></AddComments>}
          {bookAsin !== "" && (
            <>
              {comment.length > 0 && comment ? (
                <>
                  <CommentList
                    commentsListToShow={comment}
                    updateDelete={updateCommentPost}
                  />
                </>
              ) : (
                "No comments available"
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CommentArea;
