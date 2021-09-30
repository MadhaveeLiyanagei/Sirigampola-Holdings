import React from "react";
import Products from "../cartHeader/Products/Products";
import { Route, Switch } from "react-router-dom";
import Cart from "../cart/cart";

const Routes = ({
    productItems, 
    cartItems, 
    handleAddProduct, 
    handleRemoveProduct,
    handleCartClearance
})=>{
    return(
        <div>
            <Switch>
                <Route path="/products" >
                    <Products productItems = {productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/cart">
                    <Cart cartItems={cartItems} 
                    handleAddProduct={handleAddProduct} 
                    handleRemoveProduct={handleRemoveProduct}
                    handleCartClearance = {handleCartClearance}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;