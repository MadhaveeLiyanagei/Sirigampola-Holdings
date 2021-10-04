import React, { Component } from 'react';
import TaxService from '../services/TaxService';
import Pdf from 'react-to-pdf'
const ref = React.createRef();


class ListTaxComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {
              taxes: [],
              searchId:''
               
       }
        
       }


    componentDidMount(){
        TaxService.getTaxes().then((res) => {
                this.setState({ taxes: res.data});
        });
}

 


    render() {

        let filterTax = this.state.taxes.filter((

            taxes)=>{

                return taxes.productID.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );

         

        return ( 
            <>

            <div className="rGenerate">

            <div className="Post" ref={ref}> 

            <div>
                <br></br>
                  <div className="container">  
                 
                 

                <h2 className="text-center">Tax Report</h2>
                   
                     
                    <br></br>
                    <div className = "form-group col-md-4">


                    </div>
                <div className ="row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Country code</th>
                                        <th>Pre-tax price</th>
                                        <th>Tax rate</th>
                                        <th>Sub total</th>
                                        <th>VAT</th>
                                        <th>Total</th>
                                      {/*  <th>Actions</th> */}
                                      {/*  <th>***********Actions************</th> */}
                                          
                                    </tr>
                            </thead>

                            <tbody>
                                {
                                     filterTax.map(

                                        tax=>
                                    //this.state.taxes.map(
                                       // tax =>
                                        
                                        <tr key = {tax.taxID}>
                                            <td> {tax.productID}</td>
                                            <td> {tax.countryCode}</td>
                                            <td> {tax.preTaxPrice}</td>
                                            <td> {tax.taxRate}</td>
                                            <td> {tax.subTotal}</td>
                                            <td> {tax.vat}</td>
                                            <td> {tax.totalPrice}</td>
                                             
                                             

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                      
                                 
                        </div>
                  </div>  
                  
             </div>

             </div>


        
               <Pdf targetRef={ref} filename="Tax.pdf">

            {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}

             </Pdf>

           </div>

            </>  

            
        )
    }
}

export default ListTaxComponent