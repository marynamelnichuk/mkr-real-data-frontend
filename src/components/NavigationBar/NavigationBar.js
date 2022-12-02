import React from "react";
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
      <div>
          <Navbar bg="light" variant="light" className="main-navbar">
              <Container className="main-navbar-container">
                  <Navbar.Brand href="/main">Real Data</Navbar.Brand>
                  <Nav className="main-nav">
                      <Nav.Link href="/main/apps" className="main-navbar-item">Аплікації</Nav.Link>
                      <Nav.Link href="/main/configs" className="main-navbar-item">Конфігурації джерел даних</Nav.Link>
                      <Nav.Link href="/main/analysis" className="main-navbar-item">Звіти</Nav.Link>
                      <Nav.Link href="/main/mypofile" className="main-navbar-profile">Мій профіль</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
      </div>
    );
}

export default NavigationBar;