import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

// router

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// router

import Home from "../home/Home";
import Visual from "../visual/Visual";
import MySite from "../mySite/MySite";
export default function Header(props) {
  return (
    <Router>
      <div style={{ "text-align": "center" }} className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <div className="ptzan social" id="social1"></div>
              <div className="msan social" id="social1"></div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" href="#">
                  דף הבית
                </Nav.Link>

                <Nav.Link as={Link} to="/visual" href="#visual">
                  ויזואלי
                </Nav.Link>

                <Nav.Link as={Link} to="/mySite" href="#mySite">
                  האתר שלי
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/visual">
            <Visual />
          </Route>
          <Route path="/mySite">
            <MySite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
