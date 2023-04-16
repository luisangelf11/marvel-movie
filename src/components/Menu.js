import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, HashRouter, Link } from 'react-router-dom';
import Comics from '../pages/Comics.js';
import ErrorPage from '../pages/ErrorPage.js';
import Home from '../pages/Home.js';
import PageNone from '../pages/PageNone.js';

export default function Menu(){
    let styleNoneURL={
        textDecoration: "none",
        color: "red"
    };
    return(
        <HashRouter>
        {/*Component React-Boostrap*/}
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/" activeclassname="active" style={styleNoneURL}>MARVEL FANDOM</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/" activeclassname="active" style={styleNoneURL}>Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" activeclassname="active" style={styleNoneURL}>About me</Link></Nav.Link>
              <NavDropdown title="Marvel" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/comics" activeclassname="active" style={styleNoneURL}>Comics</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/series" activeclassname="active" style={styleNoneURL}>Series</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/stories" activeclassname="active" style={styleNoneURL}>Stories</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="/characteres" activeclassname="active" style={styleNoneURL}>Characters</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*Routes of Web site*/}
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path="/about" element={<PageNone />}/>
        <Route exact path="/comics" element={<Comics />}/>
        <Route exact path="/series" element={<PageNone />}/>
        <Route exact path="/stories" element={<PageNone />}/>
        <Route exact path="/characteres" element={<PageNone/>}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </HashRouter>
    );
}