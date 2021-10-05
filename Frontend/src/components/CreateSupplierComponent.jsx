import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import SoloAlert from 'soloalert';

toast.configure()

class CreateSupplierComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            //step2
            supplierid: this.props.match.params.supplierid,
            suppliername:'',
            supplieremail:'',
            supplierphone:'',
            supplierusername:'',
            supplierpassword:'',
            supplieraddress:'',
            suppliernameError:'',
            supplieremailError:'',
            supplierphoneError:'',
            supplierusernameError:'',
            supplierpasswordError:'',
            supplieraddressError:'',

        }
        this.ChangenameHandler = this.ChangenameHandler.bind(this);
        this. saveOrupdateSuppliyer = this.saveOrupdateSuppliyer .bind(this);
        this.ChangeemailHandler = this.ChangeemailHandler.bind(this);
        this.ChangephoneHandler = this.ChangephoneHandler.bind(this);
        this.ChangeuserNameHandler = this.ChangeuserNameHandler.bind(this);
        this.ChangepasswordHandler = this.ChangepasswordHandler.bind(this);
        this.ChangeaddressHandler = this.ChangeaddressHandler.bind(this);
        }
        //step 3
        componentDidMount(){

            //step 4
            if(this.state.supplierid === '_add'){
                return
            } else{
                SupplierService.getSupplierId(this.state.supplierid).then((res) => {
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
        }
        notify(){        
            toast.warn('Supplier Details Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
         }    
             notify1(){        
                 toast.warn('Supplier Details Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})    
             }
 

        
                 validate = () =>{       
             let supplierusernameError='';        
                let supplieremailError = '';        
                let supplieraddressError = '';        
                let supplierphoneError ='';        
                let  suppliernameError = ''; 
                let  supplierpasswordError='';       
                if(!this.state.supplierusername){            
                    supplierusernameError = "Please fill out this field";       
             }        
            if(!this.state.supplieremail){  
                supplieremailError = "Please fill out this field"; 
        }      
            if(!this.state.supplieraddress){            
                supplieraddressError = "Please fill out this field";        
        }        
            if(!this.state.supplierphone){            
                supplierphoneError = "Please fill out this field";        
            }        
            if(!this.state.suppliername){            
                suppliernameError = "Please fill out this field";        
        }    
        if(!this.state.supplierpassword){            
            supplierpasswordError= "Please fill out this field";        
       }
              
            if(supplierusernameError ||supplieremailError ||supplieraddressError ||supplierphoneError ||suppliernameError  ||supplierpasswordError ){            
            this.setState({supplierusernameError ,supplieremailError ,supplieraddressError ,supplierphoneError , suppliernameError  , supplierpasswordError});           
             return false;        
        }        
            return true;    
         }



        saveOrupdateSuppliyer = (e) =>{
            e.preventDefault();
            let supplier = {suppliername: this.state.suppliername, supplieremail: this.state.supplieremail, supplierphone: this.state.supplierphone, supplierusername: this.state.supplierusername, supplierpassword: this.state.supplierpassword, supplieraddress: this.state.supplieraddress};
            const isValid = this.validate();
            if(isValid){
            console.log('supplier =>'+JSON.stringify(supplier));

            //step 5
           if(this.state.supplierid === '_add'){
                SupplierService.createSupplier(supplier).then(res =>{
                    this.notify();
                    this.props.history.push('/Supplier');
                }).catch(error=> {alert("This profile is  not Available")});
                
                
            } else{
                SupplierService.updateSupplier(supplier, this.state.supplierid).then( res => {
                     this.notify1();
                    this.props.history.push('/Supplier');
                }).catch(error=> {alert("This profile is  not Available")});
                
                
            }
        }
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

        getTitle(){
            if(this.state.supplierid === '_add' ){
                return <h3 className="text-center">Add Supplier</h3>
            }else{
              return  <h3 className="text-center">Update Supplier</h3>
            }
        }
    render() {
        return (
            <div>
                 <br></br>
                <div className = "container">
                   <div className = "row">
                   <div className = "card col-md-6 offset-md-3 offset-md-3">

                   {
                                this.getTitle()
                   }  

                   <div className = "card-body">
                   <form>
                   <div className = "form-group">
                                      <label> company Name: </label> 
                                      <input placeholder="Name" name="suppliername" className="form-control"
                                         value = {this.state.suppliername} onChange={this.ChangenameHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.suppliernameError }</div>
                                        
                                        
                                   </div>
                                   <div className = "form-group">
                                      <label>Email: </label> 
                                      <input placeholder="email" name="supplieremail" className="form-control"
                                         value = {this.state.supplieremail} onChange={this.ChangeemailHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.supplieremailError }</div>
                                        
                                     </div>   
                                     <div className = "form-group">
                                      <label> Company Phone number: </label> 
                                      <input placeholder="phone number" name="supplierphone" className="form-control"
                                         value = {this.state.supplierphone} onChange={this.ChangephoneHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.supplierphoneError }</div>
                                        
                                         
                                   </div> 
                                   <div className = "form-group">
                                      <label>User Name: </label> 
                                      <input placeholder="User Name" name="supplierusername" className="form-control"
                                         value = {this.state.supplierusername} onChange={this.ChangeuserNameHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.supplierusernameError }</div>
                                        
                                         
                                   </div>  
                                   <div className = "form-group">
                                      <label>Password: </label> 
                                      <input placeholder="Password" name="suppliyerpassword" className="form-control"
                                         value = {this.state.supplierpassword} onChange={this.ChangepasswordHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.supplierpasswordError }</div>
                                        
                                         
                                   </div>

                                   <div className = "form-group">
                                      <label> company Address: </label> 
                                      <input placeholder="Address" name="supplieraddress" className="form-control"
                                         value = {this.state.supplieraddress} onChange={this.ChangeaddressHandler}/>
                                         <div style={{fontSize: 12, color: "red"}}>{this.state.supplieraddressError }</div>
                                        
                                        
                                   </div>  

                                   <br></br>
                                   <button className="btn btn-success" onClick={this.saveOrupdateSuppliyer}>Save</button>
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

export default CreateSupplierComponent;