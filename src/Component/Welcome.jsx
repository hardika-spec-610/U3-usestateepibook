import { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Over 10,000 Free and Premium Books In Your Pocket!</h1>
          <p className="hero-text">
            TreeBooks is Africa foremost online book Store where Authors can
            make their Books available as ebook or audio Books to reach Millions
            of Buyers worldwide
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
export default Welcome;
