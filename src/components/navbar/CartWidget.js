import React from "react";
import "./NavBar.css";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CartWidget= ()=>{
    return(
        <div className="navBar">
            <ShoppingBagOutlinedIcon sx={{ fontSize: 60 }}/>
            <h2>5</h2>
        </div>
    )
}
export default CartWidget