import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Sendval } from '../Login';
const DashBoard = (props) => {

  console.log("Contex api data");
  console.log(props);
  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MEDCART</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/orders">My Orders</Nav.Link>
            <Nav.Link href="/medicines">All Products</Nav.Link>
            <Nav.Link href="/cart">My Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default DashBoard;
