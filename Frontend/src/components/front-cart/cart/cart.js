import React, { Component } from 'react'
import "./cart.css"
import { Link } from 'react-router-dom';
import SoloAlert from 'soloalert'

const cart= ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
   
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price,
    0
    )

    function addBuyerOrders(e){
        e.preventDefault()

        if(!totalPrice){
            SoloAlert.alert({
                title: "Oops!",
                body: "No Items are added",
                icon: "warning",
                theme: "dark",
                useTransparency: true,
                onOk: function () {
                },
  
              });

        }else{
            
            localStorage.setItem("itemPrice",totalPrice);
            localStorage.setItem("cartitems",JSON.stringify(cartItems));
            // props.history.push({pathname:"/checkout/_add", state:cartItems})
            window.location = "/checkout/_add";

        }
     
    }
    
    return (
        <div className= "cart-items" style={{background:"#d9d9d9"}}>
        <h2 className = "cart-items-header">CART</h2>
        <div className="clear-cart">
            {cartItems.length>=1 &&(
                <button className = "btn btn-secondary" onClick={handleCartClearance}>Clear Cart</button>
            )}
        </div>

        {cartItems.length === 0 && (
        <div className="cart-items-empty">No item are added</div> 
        )}
        <div>
            {cartItems.map((item)=>(
                <div key={item.id} className="cart-items-list">
                        <img 
                        className="cart-items-image" 
                        src={item.image} 
                        alt={item.name}
                        />
                        <div className ="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            <button style={{margin:5}}
                            className="btn btn-success" 
                             onClick={()=>handleAddProduct(item)}
                            
                             >
                                <b> +</b>
                                 </button>
                            <button className="btn btn-danger" 
                            onClick={()=>handleRemoveProduct(item)}
                              >
                                  <b> -</b> 
                                </button>

                        </div>
                        <div className= "cart-items-price">
                            {item.quantity}*LKR{item.price}
                             </div>
                </div>
            ))}

        </div>

        <div className = "cart-items-total-price-name">
            Total price
            <div className = "cart-items-total-price">LKR{totalPrice}</div>
            
            
        </div>
        <div className = "row">
                <div>
                    <center>
                    <button className="btn btn-dark"onClick={(e)=>addBuyerOrders(e)}>Checkout</button>
                    </center>
                    </div>
                </div>
        </div>
      
    );
    

    
        
};

export default cart