import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./HeaderComponent.css"

const HeaderComponent = ({cartItem}) => {

    return (
        <header className="header">
        <div>
            <div className="header-links">
            
            <ul>
                <li class="header-links" style={{marginLeft:"1100px" }}>
                    <a class="nav-link" href="/createorder">Admin Orders</a>
                </li>
            </ul>
            {/* <ul>
                <li>
                        <Link to="/cart" className="cart">
                        <i class="fas fa-list-ul"></i>
                        <span className="cart-page-length">
                            {cartItem.length === 0 ? "" : cartItem.length}
                        </span>
                        </Link>
                </li>
            </ul> */}
                
            </div>
        </div>
        </header>
    )
}

// class HeaderComponent extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
            
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <header>
//                     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                         {/* <div>
//                             <a className="navbar-brand" style={{marginLeft: "20px"}}>  SIRIGAMPOLA HOLDINGS</a>
//                         </div> */}
//                         <div class="collapse navbar-collapse" id="navbarNav" style={{marginLeft: "1800px"}}>
//                             <ul class="navbar-nav">
            
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/createorder">Orders</a>
//                             </li>

//                             <li class="nav-item" style={{marginLeft: "10px"}}>
//                                 <a class="nav-link" href="/add-order">Add Order</a>
//                             </li>
                           
//                             </ul>
//                         </div>
//                     </nav>
//                     <br/><br/>
//                 </header>
//             </div>
//         );
//     }
// }

 export default HeaderComponent;