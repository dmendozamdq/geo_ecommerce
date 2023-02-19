import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./style.css";
import { NavLink } from "react-router-dom";



const NavLinkGEO = ({category,id_category}) => {

    return (
        
        <NavLink className="category_title" to={`/category/${id_category}`}>{category}</NavLink>
        
        
    );

    
};

export default NavLinkGEO;