import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';
import SoloAlert from 'soloalert';
import AdminNavbar from './AdminNavbar';

import './HeaderUser.css';

class ListSupplierComponent extends Component {

    constructor (props){
        super(props)

            this.state = {

                supplier:[],
                searchId:''
             
            }

            this.addSupplier = this.addSupplier.bind(this);
            this.editSupplier = this.editSupplier.bind(this);
            this.deleteSupplier = this.deleteSupplier.bind(this);
        } 

        deleteSupplier(supplierid){
            SoloAlert.confirm({

                title: "Confirm Delete",
                body: "Are you sure",
                theme: "dark",
                useTransparency: true,
                onOk: async function () {
    
                    try { SupplierService.deleteSupplier(supplierid)
                        await this.setState({
                            supplier : this.State.supplier.filter(supplier => supplier. supplierid!== supplierid)
                        });
                   
                
                         SoloAlert.alert({
                             title: "Welcome!",
                             body: "Deletion is successful",
                             icon: "success",
                             theme: "dark",
                             useTransparency: true,
                             onOk: function () {
                                 window.location = "/Supplier"
                             },
     
                         });
     
                     } catch (err) {
                         SoloAlert.alert({
                             title: "Welcome!",
                             body: "Deletion is successful",
                             icon: "success",
                             theme: "dark",
                             useTransparency: true,
                             onOk: function () {
                                 window.location = "/Supplier"
                             },
     
                         });
                     }
                 },
                 onCancel: function () {
                     SoloAlert.alert({
                         title: "Oops!",
                         body: "You canceled delete request",
                         icon: "warning",
                         theme: "dark",
                         useTransparency: true,
                         onOk: function () {
     
                         },
     
                     });
                 },
     
             })
     
     
         }
             
           
        
             //view supplier page
         viewSupplier(supplierid){
             this.props.history.push(`/view-supplier/${supplierid}`);
         }
         

           //update supplier
        editSupplier(supplierid){
            this.props.history.push(`/add-supplier/${supplierid}`);

        }
        
        componentDidMount(){
            SupplierService.getSupplier().then((res)=>{
                this.setState({supplier: res.data});
            })

         }

         addSupplier(){
            this.props.history.push('/add-supplier/_add');
        }
        searchSupplierName(event){

            this.setState({ searchId: event.target.value.substr(0,
    
                20)});
            }

            generateReport(){

                this.props.history.push('/supplierreport');
        
            }



    render() {
        let filterName = this.state.supplier.filter((

            supplier)=>{

                return supplier.suppliername.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );
        return (
            <div>
                 <AdminNavbar/>
                 <div className="container">
                <div class="topnav" >
                <a class="active" href="http://localhost:3000/profile">Buyer</a>
                     <a class="active" href="http://localhost:3000/Employee">Employee</a>
                     <a class="active" href="http://localhost:3000/Supplier">Supplier</a>
        </div>

                    <h2 className="text-center">Supplier List</h2>
                   
              {/*<button className="btn btn-primary" onClick={this.addSupplier}>Add Supplier</button>*/} 
               <div className = "form-group col-md-4">

               <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Supplier Name" value={this.state.searchId} onChange={this.searchSupplierName.bind(this)}/>

                </div>  
              
                    <div className = "row">
                    
                    <table  className = "table table-striped table-bordered">

                    <thead>
                            <tr>
                                <th> Suplier Name</th>
                                <th> Supplier email</th>
                                <th> Supplier phone</th>
                                <th> Supplier userName</th>
                                <th> Supplier password</th>
                                <th> Supplier address</th>
                                <th> Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                filterName.map(

                                    supplier=>
                                //this.state.supplier.map(
                                    //supplier =>
                                    <tr key = {supplier.supplierid}>
                                        <td>{supplier.suppliername} </td>
                                        <td>{supplier.supplieremail} </td>
                                        <td>{supplier.supplierphone} </td>
                                        <td>{supplier.supplierusername}</td>
                                        <td>{supplier.supplierpassword}</td>
                                        <td>{supplier.supplieraddress}</td>
                                        <td>
                                        <button onClick={()=> this.editSupplier(supplier.supplierid)} className=" button-up">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={()=> this.deleteSupplier(supplier.supplierid)} className="button-dele">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={()=> this.viewSupplier(supplier.supplierid)} className="button-view">View</button>
                                        </td>
                                     </tr>   
                                )
                            }
                        </tbody>


                        </table>
                
                </div>
                <button className="btn btn-primary" onClick={()=>this.generateReport()}>Supplier Details report</button>
                </div>
            </div>
        );
    }
}

export default ListSupplierComponent;