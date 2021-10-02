import React from 'react'
import '../App.css'
import { Button } from './Button';
import './Register.css';


function Register() {

   function addBuyer(e){
        e.preventDefault()
        window.location="/add-buyer/_add"
        //this.props.history.push('/add-buyer/_add');
    }

    function addEmployee(e){
        e.preventDefault()
        window.location="/add-employee/_add"
        //this.props.history.push('/add-employee/_add');
    }

    function addSupplier(e){
        e.preventDefault()
        window.location="/add-supplier/_add"
       // this.props.history.push('/add-supplier/_add');
    }

    return (
        <div className = 'register-container'>
           

        <video src = "/videos/importexport.mp4" autoPlay loop muted/>
            <h1>JOIN WITH US</h1>
            
            <div className = "register-btns">
               {/* <Button className='btns' buttonStyle='btn--outline'
                buttonSize ='btn--large'> AS A BUYER</Button>*/}

                 <button className="btn btn-primary" onClick={(e)=>addBuyer(e)}>AS A BUYER</button>


                {/*<Button className='btns' buttonStyle='btn--primary'
                buttonSize ='btn--large'> AS A SUPPLIER<i className ='far fa-play-circle'/></Button>*/}
                <button className="btn btn-primary" onClick={(e)=>addEmployee(e)}>AS A EMPLOYEE</button> 

                {/*<Button className='btns' buttonStyle='btn--primary'
                buttonSize ='btn--large'> AS A EMPLOYEE<i className ='far fa-play-circle'/></Button>*/}
                <button className="btn btn-primary" onClick={(e)=>addSupplier(e)}>AS A SUPPLIER</button> 
            </div>
        </div>
    );
}

export default Register
