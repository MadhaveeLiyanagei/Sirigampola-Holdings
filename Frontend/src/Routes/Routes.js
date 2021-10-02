import React from "react";
import MainContent from "../components/mainContent";
import Cart from "../Cart/Cart";
import {Route, Switch} from 'react-router-dom';

const Routes = ({ item, cartItem }) => {
    return(
        <div>
            <Switch>
                <Route path = "/" exact>
                    <MainContent item={item} />
                </Route>
                <Route path = "/cart" exact>
                    <Cart cartItem={cartItem} />
                </Route>

                {/* <Route path = "/cart" component = {Cart} ></Route> */}

            </Switch>
        </div>
    );
};

export default Routes;