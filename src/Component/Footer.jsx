
import { Component } from "react";
import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import './componentStyles.css'

class Footer extends Component {
render() {
    return(
    <footer className="footer py-4">
        <Container>
        <Navbar.Brand href="#home">TREEBOOKS</Navbar.Brand>
            <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div>
                        
                        <Card.Text className="ftr-text">
                                Jump start your book reading by quickly check through the popular book categories. Buy your favourite books on TreeBooks Today.
                        </Card.Text>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <ul>
                        <li><a href="#home" className="footer-link">Home</a></li>
                        <li><a href="#about" className="footer-link">About</a></li>
                        <li><a href="#browse" className="footer-link">Browse</a></li>
                    </ul>
                </Col>
                
            </Row>
        </Container>
    </footer>
       
    )

    
}
}
export default Footer