import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar= ()=>{
    return(
        <div className="navBar">
            <h1>LIGHT DENIM</h1>
            <h2>Since 1983</h2>
            <nav>
                <ul>
                    <li><a href="">Colecciones</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Novedades</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
}
export default NavBar