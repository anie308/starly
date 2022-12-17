import React  from 'react';
import './topnav.css'
// import styled from 'styled-components'
import {Navbar,
        Nav,
        NavDropdown,
        Container,
        Form,
        FormControl,
        Button,



} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaBook,
  FaSearch,
  FaLibrary,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";


// const Item = styled.div` 
// height:200px;
// display: flex;
// column-gap:20px;
  // background-color: black !important;

// :hover{
//     background-color: rgba(0, 0,0, 0.1) !important;
//     color:white;
// }

// @media screen and (max-width: 900px){
// margin-top: 10px;
// }
// `

function Topnavbar() {
    return (
        <>
<Navbar collapseOnSelect expand="lg" sticky="top">
  <Container>
  {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="dark" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-3 ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#free">Free</Nav.Link>
      <Nav.Link href="#features">Browse</Nav.Link>
      <Nav.Link href="#features">Create</Nav.Link>
      <NavDropdown title="Writer Benfit" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Writer Rewards</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Author Band</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Author Project </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Contest " id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Love Conquers All</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Horror Nights</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">A Touch of Rainbow </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">The Blessed Wolf</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">The CEO AND ME</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Last minute bride </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Sold for Debt </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Son-in-law's Revenge</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tame The Dragon </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Meta The Alpha</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Goodnovelist 2020</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tonight We Are Young</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"><FaSearch /></Button>
      </Form>
      <Nav>
      <Nav.Link href="#features"><FaBook/>Library</Nav.Link>
      <NavDropdown title="English" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Francais</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Filipino </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Pyccknn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Indonesia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">..........</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link href="#home"><FaUserCircle/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

          {/* <nav id='root' class="navbar navbar-expand-lg    pl-3 py-0 row mx-0 " >
            <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a  class="navbar-brand" href="#">Hidden brand</a>

              <ul class="nav  mt-2 mt-lg-0 d-flex col  p-0">
                <li  class="nav-item  p-3  item" >
                  <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li  class="nav-item  p-3 item" >
                <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item  p-3 item">
                <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item  p-3 item">
                <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item  p-3 item">
                <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item  p-3 item">
                <a  class="nav-link px-0 text-muted" href="#">Home</a>
                </li>
              </ul>
              <div class="col px-0">
              <div className="row mx-0 my-0">
              <form  class="form my-0 ">
                <div class=" p-3 d-flex gap-0">
                <input  class="form-control  mr-sm-2  mx-0 search" type="search" placeholder="Search" aria-label="Search"/>
                <button  class="  my-2 mx-0  my-sm-0 icon" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
              </form>
              <ul class="nav justify-content-end ml-4 d-flex">
                <li class="nav-item p-3">
                <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item p-3">
                <a  class="nav-link px-0 text-muted" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
              </ul>
              <div  class=" col m-0 " >
                <div class="row py-2">
                  <div  class=" img-icon rounded-circle"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
                </div>
              </div>
                  
              </div>
              </div>

            </div>
          </nav>         */}
        </>
    )
}

export default Topnavbar
