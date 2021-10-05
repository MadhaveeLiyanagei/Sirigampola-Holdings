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
            <img  style={{width:50}} class="logo" src="./images/importLogo.png" alt="" />  SIRIGAMPOLA HOLDINGS</Link>
             
            <div className = 'menu-icon' onClick= {handleClick}>
            
            </div>
            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
           
             
         {/*  <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              <img class="logo" src="./images/importLogo.png" alt="" /> SIRIGAMPOLA
              HOLDINGS
              </Link>  
              
               
              <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>              
              <img style={{width:70}}class="logo" src="./images/shlogo.png" alt="" /> SIRIGAMPOLA  
               HOLDINGS            
              </Link>            
              <ul className ={click ? 'nav-menu active' : 'nav-menu'}>


              
              
              */}
           

             
            <li className='nav-item'>
                <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Finance' className='nav-links' onClick={closeMobileMenu}>
                Finance
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Employee' className='nav-links' onClick={closeMobileMenu}>
                Employee
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Inventory' className='nav-links' onClick={closeMobileMenu}>
                Inventory
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