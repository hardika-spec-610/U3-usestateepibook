import { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./componentStyles.css";

class singleBook extends Component {
  // state = {
  //   selected: false,
  // };
  render() {
    return (
      // <Card
      //   className="w-100 shadow-sm"
      //   onClick={() => {
      //     this.setState({ selected: !this.state.selected });
      //   }}
      //   style={{ backgroundColor: this.state.selected ? "#d0f222" : "white" }}
      // >
      <Card
        className="w-100 shadow-sm"
        onClick={() => {
          this.props.handleBook(this.props.singleBook.asin);
          console.log("select", this.props.handleBook);
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.singleBook.img}
          alt={this.props.singleBook.title}
          height="300px"
        />
        <Card.Body>
          <Card.Title>{this.props.singleBook.title}</Card.Title>
        </Card.Body>
        <div className="mt-auto">
          <ListGroup className="list-group-flush">
            <ListGroupItem className="d-flex justify-content-between pb-0">
              <Card.Text className="font-weight-bold">Category</Card.Text>
              <Card.Text className="price-text font-weight-bold">
                {this.props.singleBook.category}
              </Card.Text>
            </ListGroupItem>
          </ListGroup>
          <Card.Body className="d-flex justify-content-between pb-0 pt-2">
            <Card.Text className="font-weight-bold">Price</Card.Text>
            <Card.Text className="price-text font-weight-bold">
              {this.props.singleBook.price}
            </Card.Text>
          </Card.Body>
        </div>
        {/* {this.state.selected && (
          <CommentArea bookAsin={this.props.singleBook.asin} />
        )} */}
        {/* short-circuit method */}
      </Card>
    );
  }
}
export default singleBook;
