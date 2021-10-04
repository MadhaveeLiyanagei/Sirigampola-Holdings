import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import AuthenticationService from './Authentication/AuthenticationService';

function Navbar({cartItems}) {
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

        //this.props.history.push('/add-buyer/_add');

    }

    return (
       
      <>
         <nav className="navbar" >
         <div className='navbar-container'>

            <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              <img style={{width:70}}class="logo" src="./images/shlogo.png" alt="" /> SIRIGAMPOLA
              HOLDINGS
            </Link>

            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>

         
           <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            
            <li className='nav-item'>
                <Link to='/Orders' className='nav-links' onClick={closeMobileMenu}>
                    Orders
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    Profile
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                    <i className = "fas fa-shopping-cart"/>
                    <span className ="cart-length">
                        {cartItems.length === 0 ? "" : cartItems.length}
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
