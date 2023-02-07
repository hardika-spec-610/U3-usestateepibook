import { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import "./componentStyles.css";

class AllTheBooks extends Component {
  state = {
    selectedBookCategory: fantasy,
  };
  render() {
    return (
      <Container>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: fantasy });
          }}
        >
          Fantasy
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: history });
          }}
        >
          History
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: horror });
          }}
        >
          Horror
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: romance });
          }}
        >
          Romance
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: scifi });
          }}
        >
          Scifi
        </Button>
        <Row>
          {this.state.selectedBookCategory.map((singleBook) => {
            return (
              <Col
                key={singleBook.asin}
                xs={12}
                sm={12}
                md={6}
                lg={3}
                className="d-flex mb-lg-4 mb-md-4 mb-sm-3 mb-xs-3"
              >
                <Card className="w-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={singleBook.img}
                    alt={singleBook.title}
                    height="300px"
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {singleBook.title}
                    </Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{singleBook.category}</ListGroupItem>
                  </ListGroup>
                  <Card.Body className="d-flex justify-content-between pb-0">
                    <Card.Text className="font-weight-bold">Price</Card.Text>
                    <Card.Text className="price-text font-weight-bold">
                      {singleBook.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
