import React from "react";
import "./Cart.css";

const Cart = ({ cartItem, handleAddProduct, handleRemoveProduct, handleCartClearence }) => {

    const totalPrice = cartItem.reduce((price,item) => price + item.quantity * item.price, 0);

    return(
        <div>
            <div className = "row" style={{marginTop:"50px" }}></div>

            {/* <div className="cart-items"> */}
            <div className="cart-container">

                {/* <h1 style={{color:"white", marginBottom:"150px", textAlign:"center"}}> Order Confirm </h1> */}
                <div className="cart-page-header"> Order List </div>

                <div className="cart-clear-page">
                    {cartItem.length >= 1 && (
                        <button className="cart-clear-page-button" onClick={handleCartClearence}> CLEAR CART </button>
                    )}
                </div>

                {cartItem.length == 0 &&
                        (<div className="cart-page-empty"> No Items are Added !</div>)}

                <div>
                    {cartItem.map((item) => (
                        <div key={item.id} className="cart-page-list" >
                            <img
                            // className="cart-item-image"
                                className="cart-page-image-view"
                                src={item.thumb} //image
                                alt={item.product_name} //name
                            />

                            {/* <div className="cart-item-name" style={{color:"white", marginBottom:"150px"}}>{item.product_name}</div> */}
                            <div className="cart-page-header-name">{item.product_name}</div>

                            {/* <div className="cart-item-function" style={{color:"white", marginLeft:"-300px"}}> */}
                            <div className="cart-page-function">

                                <button className="cart-page-add" onClick={() => handleAddProduct(item)}>+</button>
                                 {item.quantity}
                                <button className="cart-page-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                            </div>

                            <div className = "cart-page-price">
                                {item.currency}&nbsp;{item.price}/=
                            </div>

                        </div>
                    ))}
                </div>

                <div className = "cart-page-total-price-name">
                {/* <div className = "cart-page-total-price-name" style={{color:"white", marginTop:"150px"}}> */}
                    Total Price &nbsp;
                    <div className = "cart-page-total-price" style={{color:"white"}}>  Rs: {totalPrice}</div>
                </div>

                <div className = "cart-checkout-page">
                    <button className="cart-checkout-page-button" > ADD ORDER </button>
                </div>

            </div>
            <div className = "row" style={{marginBottom:"100px" }}></div>
        </div>
    );
};

export default Cart;