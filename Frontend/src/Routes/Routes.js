import React from "react";
import MainContent from "../components/mainContent";
import Cart from "../Cart/Cart";
import {Route, Switch} from 'react-router-dom'; 
import mainContent from '../components/mainContent';


const Routes = ({ productItem,cartItem, handleAddProduct }) => {

   
    return(
        <div>
            <Switch>
                {/* <Route path = "/product-home" component = {mainContent} exact>
                    <MainContent productItem={productItem} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path = "/cart" exact>
                    <Cart cartItem={cartItem} handleAddProduct={handleAddProduct}/>
                </Route> */}

                {/* <Route path = "/cart" component = {Cart} ></Route> */}

            </Switch>
        </div>
    );
};

export default Routes;