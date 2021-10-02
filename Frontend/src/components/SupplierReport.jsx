import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';
import Pdf from 'react-to-pdf'

const ref = React.createRef();
class SupplierReport extends Component {
    constructor (props){
        super(props)

            this.state = {

                supplier: [],

                searchId:''
        }

      
    }

                  

    componentDidMount(){
       SupplierService.getSupplier().then((res)=>{
           this.setState({supplier: res.data});
       })

    }

   

    render() {
        let filterName = this.state.supplier.filter((

            supplier)=>{
     
                return supplier.suppliername.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;
     
                    
     
            }
     
        );
     
     
        return (
         <>
     
         <div>
     
                 <div className="Post" ref={ref}>
            <div>
                <div className="container">
                <h2 className="text-center">Buyer List</h2>
     
                    
     
                   
               
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
                                       
     
                                     </tr>   
                                )
                            }
                        </tbody>
     
                    </table>
     
                </div>
                </div>
                </div>
     
           </div>
     
           </div>     
     
                     <Pdf targetRef={ref} filename="SupplierDetails.pdf">
     
                         {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}
     
                     </Pdf>
     
     
     
                 </>
        );
     }
     }

export default SupplierReport;