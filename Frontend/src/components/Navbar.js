import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
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
    return (
        <>
         <nav className="navbar">
         <div className='navbar-container'>
            
            <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                SIRIGAMPOLA HOLDINGS <i className="fab fa-typo3"></i>  
            </Link>

            <div className = 'menu-icon' onClick= {handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>

            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/product-home' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/createorder' className='nav-links' onClick={closeMobileMenu}>
                        Orders
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                        Profile
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/about company' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
            </ul>
            
            {button && <Button buttonStyle = 'btn--outline'> SIGN UP</Button>}
             </div>
            
             </nav>   
        </>
    );
}

export default Navbar;
