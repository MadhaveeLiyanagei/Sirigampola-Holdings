import React from 'react';
import '../App.css'
import AdminPanel from '../components/AdminPanel';
import Cards from '../components/Cards';


function AdminHome(){
    return(
        <>
            <AdminPanel/>
            <div className="container1">
            <Cards/>
            </div>
        </>

    );
}
 
export default AdminHome;