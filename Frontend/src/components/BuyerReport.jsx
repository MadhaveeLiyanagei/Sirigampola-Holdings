import React, { Component } from 'react';
import BuyerService from '../services/BuyerService';
import Pdf from 'react-to-pdf'

const ref = React.createRef();

class BuyerReport extends Component {
    constructor (props){
        super(props)

            this.state = {

                buyer: [],

                searchId:''
        }

      
    }

                  

    componentDidMount(){
       BuyerService.getBuyer().then((res)=>{
           this.setState({buyer: res.data});
       })

    }

   

    

render() {
   let filterName = this.state.buyer.filter((

       buyer)=>{

           return buyer.name.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

               

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
                           <th> Buyer Name</th>
                           <th> Buyer email</th>
                           <th> Buyer phone</th>
                           <th> Buyer userName</th>
                           <th> Buyer password</th>
                           <th> Buyer address</th>
                           

                       </tr>
                   </thead>

                   <tbody>
                       {
                           filterName.map(

                               buyer=>
                           //this.state.buyer.map(
                              // buyer =>
                               <tr key = {buyer.id}>
                                   <td>{buyer.name} </td>
                                   <td>{buyer.email} </td>
                                   <td>{buyer.phone} </td>
                                   <td>{buyer.userName}</td>
                                   <td>{buyer.password}</td>
                                   <td>{buyer.address}</td>

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

                <Pdf targetRef={ref} filename="BuyerDetails.pdf">

                    {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}

                </Pdf>



            </>
   );
}
}

export default BuyerReport;