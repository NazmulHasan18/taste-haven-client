// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
   return (
      <Navbar bg="transparent" variant="dark" fixed="top">
         <Container className="gap-4 mt-3">
            <Navbar.Brand href="#home">Taste Haven</Navbar.Brand>
            <Form className="d-flex position-relative flex-grow-1">
               <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 bg-white bg-opacity-25 search-input text-white"
                  aria-label="Search"
               />
               <Button
                  variant="success"
                  className="rounded-0 rounded-end position-absolute end-0 me-2  bg-success bg-opacity-25"
               >
                  <FaSearch></FaSearch>
               </Button>
            </Form>
            <Nav className="flex-grow-1 justify-content-center gap-4">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#blogs">Blogs</Nav.Link>
               <Nav.Link href="#chefs">Chefs</Nav.Link>
               <Nav.Link href="#reviews">Reviews</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
               <Nav.Link href="#home">img</Nav.Link>
               <Nav.Link href="#blogs">
                  <Button variant="danger">Danger</Button>
               </Nav.Link>
            </Nav>
         </Container>
      </Navbar>
   );
};

export default NavigationBar;