import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './AdminEmployeeSideNavbar.css';

const AdminEmployeeSideBar = (props) => {
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
<div className="sideNavBar">
            <ul >
            <li >
                <Link to='/Employee' className='nav-links' onClick={closeMobileMenu}>
                    Employee List
                </Link>
            </li>
            <li >
                <Link to='/employeeLeaves' className='nav-links' onClick={closeMobileMenu}>
                    Employee Leaves
                </Link>
            </li>
            <li >
                <Link to='/orders' className='nav-links' onClick={closeMobileMenu}>
                    Notices
                </Link>
            </li>

            <li >
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    Profile
                </Link>
            </li>

            <li >
                <Link to='/about company' className='nav-links' onClick={closeMobileMenu}>
                    About Company
                </Link>
            </li>
            </ul>
</div>
 );
};
export default AdminEmployeeSideBar;
