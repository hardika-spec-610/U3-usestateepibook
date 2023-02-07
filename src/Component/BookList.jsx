import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import SingleBook from "./SingleBook";
import "./componentStyles.css";

class BookList extends Component {
  state = {
    selectedBookCategory: fantasy,
    searchQuery: "",
  };
  render() {
    return (
      <>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search your book here"
            value={this.state.searchQuery}
            onChange={(e) => {
              console.log("letter inputted!", e.target.value);
              this.setState({ searchQuery: e.target.value });
            }}
          />
        </Form.Group>
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
          {this.state.selectedBookCategory
            .slice(0, 20)
            .filter((searchedBook) =>
              searchedBook.title
                .toLocaleLowerCase()
                .includes(this.state.searchQuery)
            )
            .map((currentBook) => {
              return (
                <Col
                  key={currentBook.asin}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  className="d-flex mb-lg-4 mb-md-4 mb-sm-3 mb-xs-3"
                >
                  <SingleBook
                    singleBook={currentBook}
                    handleBook={this.props.selectedBook}
                  />
                </Col>
              );
            })}
        </Row>
      </>
    );
  }
}

export default BookList;
