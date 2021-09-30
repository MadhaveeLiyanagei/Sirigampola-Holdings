import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        {/* <div>
                            <a className="navbar-brand" style={{marginLeft: "20px"}}>  SIRIGAMPOLA HOLDINGS</a>
                        </div> */}
                        <div class="collapse navbar-collapse" id="navbarNav" style={{marginLeft: "1800px"}}>
                            <ul class="navbar-nav">
            
                            <li class="nav-item">
                                <a class="nav-link" href="/createorder">Orders</a>
                            </li>

                            <li class="nav-item" style={{marginLeft: "10px"}}>
                                <a class="nav-link" href="/add-order">Add Order</a>
                            </li>
                           
                            </ul>
                        </div>
                    </nav>
                    <br/><br/>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;