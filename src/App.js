import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AllTheBooks from "./Component/AllTheBooks";
import BookList from "./Component/BookList";
import Footer from "./Component/Footer";
import MyNav from "./Component/MyNav";
import Welcome from "./Component/Welcome";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./Component/CommmentArea";

const App = () => {
  // state = {
  //   bookAsin: "",
  // };
  const [bookAsin, setBookAsin] = useState("");

  const selectedBook = (newBook) => {
    console.log("newBook", newBook);
    setBookAsin(newBook);
  };

  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={8}>
            <div>
              <BookList selectedBook={selectedBook} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            {" "}
            <div className="sticky-top">
              <CommentArea bookAsin={bookAsin} />
            </div>
          </Col>
        </Row>

        {/* <AllTheBooks /> */}
      </Container>

      <Footer />
    </div>
  );
};

export default App;
