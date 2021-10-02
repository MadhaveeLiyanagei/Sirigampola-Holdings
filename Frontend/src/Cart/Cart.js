import React from "react";

const Cart = ({ cartItem }) => {
    return(
        <div>
            <div className = "row" style={{marginTop:"100px" }}></div>
            <div className="cart-items-header">
                <div className="cart-items-header"> Order Confirm </div>

            </div>
            <div className = "row" style={{marginBottom:"100px" }}></div>
        </div>
    );
};

export default Cart;