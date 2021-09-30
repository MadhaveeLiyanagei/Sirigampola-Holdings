import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
//import AuthenticationService from './Authentication/AuthenticationService';



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

    //const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    //const loggedUserRole = AuthenticationService.loggedUserRole();

    //let loggedAsAdmin = false;
    //let loggedAsSupplier = false;
    //let loggedAsBuyer = false;
    //let loggedAsEmployee = false;

    //if(loggedUserRole != null && loggedUserRole === 'Admin'){
    //   loggedAsAdmin = true;
    //}
    //if(loggedUserRole != null && loggedUserRole === 'Supplier'){
    //    loggedAsSupplier = true;
    //}
    //if(loggedUserRole != null && loggedUserRole === 'Buyer'){
    //   loggedAsBuyer = true;
    //}

    //if(loggedUserRole != null && loggedUserRole === 'Employee'){
     //   loggedAsEmployee = true;
    //}
    
    
    return (
       
      <>
         <nav className="navbar" >
         <div className='navbar-container'>
   
            <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                SIRIGAMPOLA HOLDINGS <i className="fab fa-typo3"></i>  
            </Link>
            <div className = 'menu-icon' onClick= {handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
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
                        {cartItems.length ===0 ? "" : cartItems.length}
                    </span>
                </Link>
            </li>
            
            </ul>
            {button && <Button buttonStyle = 'btn--outline'onClick={closeMobileMenu}> SIGN UP</Button>}
             </div>
            
             </nav>   
        </>
    );
    }



export default Navbar;
