import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import "./HeaderComponent.css"


function Navbar({cartItem}) {
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth<= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
        useEffect(() =>{
            showButton();
        }, []);
    window.addEventListener('resize', showButton);


    function logout(e){

        e.preventDefault()
        window.location="/"

    }
    
    return (
        <>
         <nav className="navbar">
         <div className='navbar-container'>
            
         <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              <img style={{width:70}}class="logo" src="./images/shlogo.png" alt="" /> SIRIGAMPOLA
              HOLDINGS
            </Link>

            <div className = 'menu-icon' onClick= {handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>

            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/product-home' className='nav-links' onClick={closeMobileMenu}>
                        Orders
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Profile
                    </Link>
                </li>

                {/* <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Company
                    </Link>
                </li> */}

                {/* <li className='nav-item'>
                    <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                    <i class="fas fa-list-ul"></i>
                    <span className="cart-page-length">
                        {CardItem.length === 0 ? "" : CardItem.length}
                    </span>
                    </Link>
                </li> */}

                <li>
                        <Link to="/cart" className="cart">
                        <i class="fas fa-list-ul"></i>
                        <span className="cart-page-length">
                            {cartItem.length === 0 ? "" : cartItem.length}
                        </span>
                        </Link>
                </li>

                
            </ul>
            
            {button && <Button buttonStyle = 'btn--outline' onClick={(e)=>logout(e)}>Logout</Button>}
             </div>
            
             </nav>   
        </>
    );
}

export default Navbar;
