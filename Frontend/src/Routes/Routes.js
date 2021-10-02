import React from "react";
import MainContent from "../components/mainContent";
import {Route, Switch} from 'react-router-dom';

const Routes = ({ item }) => {
    return(
        <div>
            <switch>
                <Route path = "/" exact>
                    <MainContent item={item} />
                </Route>
            </switch>
        </div>
    );
};

export default Routes;