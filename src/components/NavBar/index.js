import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLinkGEO from "../NavLink";
import CartGEO from "../CartWidget";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { mockedCategories } from "../../utils/categories";
import logo from '../../images/logo_geo.png';

let activeStyle = {
  textDecoration: "underline",
};

const NavBarGEO = ({title, children}) => {

return (
          <>
            <Navbar className="nav_background">
              <Container>
              <Navbar.Brand>
              <Link to="/">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
                
                </Link>
              </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    
                    {
                    mockedCategories.map((cat) => (
                        <NavLinkGEO
                            id_category={cat.id}
                            category={cat.category}
                            

                        />
                    ))}

                    
                    
                    
                    
                    <NavLinkGEO 
                      to="/"
                      style={({ isActive }) => isActive ? activeStyle : undefined }
                      titlebutton={"Gestión de Proyectos"}>
                    </NavLinkGEO>
                    <NavLinkGEO 
                      to="/"
                      style={({ isActive }) => isActive ? activeStyle : undefined }
                      titlebutton={"Evaluación"}>
                    </NavLinkGEO>
                    <NavLinkGEO 
                      to="/"
                      style={({ isActive }) => isActive ? activeStyle : undefined }
                      titlebutton={"Coaching Educativo"}>
                    </NavLinkGEO> 
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
