import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';


class UpdateSupplierComponent extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            supplierid: this.props.match.params.supplierid,
            suppliername:'',
            supplieremail:'',
            supplierphone:'',
            supplierusername:'',
            supplierpassword:'',
            supplieraddress:''

        }
        this.ChangenameHandler = this.ChangenameHandler.bind(this);
        this.updateSupplier = this.updateSupplier.bind(this);
        }

        componentDidMount(){
            SupplierService.getSupplierById(this.state.supplierid).then((res) => {
                let supplier = res.data;
                this.setState({suppliername: supplier.suppliername,
                    supplieremail: supplier.supplieremail,
                    supplierphone: supplier.supplierphone,
                    supplierusername: supplier.supplierusername,
                    supplierpassword: supplier.supplierpassword,
                    supplieraddress: supplier.supplieraddress    
              });
  
            });
        }

        updateSupplier = (e) =>{
            e.preventDefault();
            let supplier = {suppliername: this.state.suppliername, supplieremail: this.state.supplieremail, supplierphone: this.state.supplierphone, supplierusername: this.state.supplierusername, supplierpassword: this.state.supplierpassword, supplieraddress: this.state.supplieraddress};
            console.log('supplier =>'+JSON.stringify(supplier));

            SupplierService.updateSupplier(supplier, this.state.supplierid).then( res => {
                this.props.history.push('/Supplier');
            });
           
        }

        ChangenameHandler= (event) =>{
            this.setState({suppliername: event.target.value});    
        }
        ChangeemailHandler= (event) =>{
            this.setState({supplieremail: event.target.value});    
        }
         ChangephoneHandler= (event) =>{
            this.setState({supplierphone: event.target.value});    
        }
        ChangeuserNameHandler= (event) =>{
            this.setState({supplierusername: event.target.value});    
        }
        ChangepasswordHandler= (event) =>{
            this.setState({supplierpassword: event.target.value});    
        }
        ChangeaddressHandler= (event) =>{
            this.setState({supplieraddress: event.target.value});    
        }
        cancel(){
            this.props.history.push('/Supplier');
        }
    render() {
        return (
            <div>
                <div className = "container">
                   <div className = "row">
                   <div className = "card col-md-6 offset-md-3 offset-md-3">
                   <h3 className ="text-center">Update Supplier</h3>   
                   <div className = "card-body">
                   <form>
                   <div className = "form-group">
                                      <label> company Name: </label> 
                                      <input placeholder="Name" name="suppliername" className="form-control"
                                         value = {this.state.suppliername} onChange={this.ChangenameHandler}/>
                                        
                                   </div>
                                   <div className = "form-group">
                                      <label>Email: </label> 
                                      <input placeholder="email" name="supplieremail" className="form-control"
                                         value = {this.state.supplieremail} onChange={this.ChangeemailHandler}/>
                                     </div>   
                                     <div className = "form-group">
                                      <label> Company Phone number: </label> 
                                      <input placeholder="phone number" name="supplierphone" className="form-control"
                                         value = {this.state.supplierphone} onChange={this.ChangephoneHandler}/>
                                         
                                   </div> 
                                   <div className = "form-group">
                                      <label>User Name: </label> 
                                      <input placeholder="User Name" name="supplierusername" className="form-control"
                                         value = {this.state.supplierusername} onChange={this.ChangeuserNameHandler}/>
                                         
                                   </div>  
                                   <div className = "form-group">
                                      <label>Password: </label> 
                                      <input placeholder="Password" name="suppliyerpassword" className="form-control"
                                         value = {this.state.supplierpassword} onChange={this.ChangepasswordHandler}/>
                                         
                                   </div>

                                   <div className = "form-group">
                                      <label> company Address: </label> 
                                      <input placeholder="Address" name="supplieraddress" className="form-control"
                                         value = {this.state.supplieraddress} onChange={this.ChangeaddressHandler}/>
                                        
                                   </div>  

                                   <br></br>
                                   <button className="btn btn-success" onClick={this.updateSupplier}>Save</button>
                                   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button> 
                        </form>
                       </div>
                   </div>
               </div>
            </div>
            </div>
        );
    }
}

    export default UpdateSupplierComponent;