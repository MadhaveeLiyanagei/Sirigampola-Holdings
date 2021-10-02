import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function AdminNavbar() {
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
                <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Supplier' className='nav-links' onClick={closeMobileMenu}>
                Supplier
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Employee' className='nav-links' onClick={closeMobileMenu}>
                Employee
                </Link>
            </li>

           
            <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                profile
                </Link>
            </li>


        
 
            </ul>
            {button && <Button buttonStyle = 'btn--outline'> SIGN UP</Button>}
             </div>
            
             </nav>   
        </>
    );
}

export default AdminNavbar;