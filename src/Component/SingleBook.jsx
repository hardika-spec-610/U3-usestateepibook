import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./componentStyles.css";

const SingleBook = ({ handleBook, selectedItem, singleBook }) => {
  return (
    <Card
      className="w-100 shadow-sm"
      onClick={() => {
        handleBook(singleBook.asin);
        console.log("select", handleBook);
      }}
      style={{
        backgroundColor: selectedItem === singleBook.asin ? "#d0f222" : "white",
      }}
    >
      <Card.Img
        variant="top"
        src={singleBook.img}
        alt={singleBook.title}
        height="300px"
      />
      <Card.Body>
        <Card.Title>{singleBook.title}</Card.Title>
      </Card.Body>
      <div className="mt-auto">
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex justify-content-between pb-0">
            <Card.Text className="font-weight-bold">Category</Card.Text>
            <Card.Text className="price-text font-weight-bold">
              {singleBook.category}
            </Card.Text>
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between pb-0 pt-2">
          <Card.Text className="font-weight-bold">Price</Card.Text>
          <Card.Text className="price-text font-weight-bold">
            {singleBook.price}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};
export default SingleBook;
