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

    function logout(e){
        e.preventDefault()
        window.location="/"
        //this.props.history.push('/add-buyer/_add');



    }
    return (
        <>
         <nav className="navbar">
         <div className='navbar-container'>
            
            <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
            <img  style={{width:50}} class="logo" src="./images/importLogo.png" alt="" />SIRIGAMPOLA HOLDINGS  
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
                <Link to='/orders' className='nav-links' onClick={closeMobileMenu}>
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
                    About Company
                </Link>
            </li>

           
 
            </ul>
             <Button className='nav-links'  onClick={(e)=>logout(e)}>Logout</Button>
             </div>
            
             </nav>   
        </>
    );
}

export default Navbar;
