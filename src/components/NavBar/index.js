import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLinkGEO from "../NavLink";
import CartGEO from "../CartWidget";
import "./style.css";

const NavBarGEO = ({title},{children}) => {

return (
          <>
             <Navbar className="nav_background">
              <Container>
                <Navbar.Brand>
                  
                  <p className="brand_title">{title}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <NavLinkGEO titlebutton={"Gestión de Proyectos"}></NavLinkGEO>
                    <NavLinkGEO titlebutton={"Diseño Pedagógico"}></NavLinkGEO>
                    <NavLinkGEO titlebutton={"Evaluación"}></NavLinkGEO>
                    <NavLinkGEO titlebutton={"Coaching Educativo"}></NavLinkGEO>
                    
                  </Nav>
                  <Nav>
                    <CartGEO totalitemscart={"0"}></CartGEO>
                    
                  </Nav>
                </Navbar.Collapse>
                        
                          
                          
                      </Container>
                    </Navbar>
          </>  
        );

};

export default NavBarGEO;
