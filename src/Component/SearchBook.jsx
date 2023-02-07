import { Component } from "react";
import { Form } from "react-bootstrap";

class SearchBook extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
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
    );
  }
}
export default SearchBook;
