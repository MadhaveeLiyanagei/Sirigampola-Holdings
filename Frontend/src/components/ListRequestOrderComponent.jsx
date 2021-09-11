import React, { Component } from 'react';
import RequestOrderService from '../services/RequestOrderService';

/*List request order*/
class ListRequestOrderComponent extends Component {
   
    constructor(props){
        super(props)

        this.state = {

            requestOrder: []
        }
        
    }


    componentDidMount(){
        RequestOrderService.getRequestOrder().then((res) => {
              this.setState({ requestOrder : res.data});
         }
        );
     }

     
    render() {
        return (
            <div>

              <h2 className="text-center">Requested Orders</h2>
                <div className = "row">
                </div>
                 <div className = "row">
                
                   <table className="table table-striped table bordered">

                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Re-Order Level</th>
                          <th>Description</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                          {
                              this.state.requestOrder.map(
                                  requestOrder =>
                                  <tr key = {requestOrder.requestOrderID}>
                                      <td>{requestOrder.productID}</td>
                                      <td>{requestOrder.productName}</td>
                                      <td>{requestOrder.reOrder}</td>
                                      <td>{requestOrder.costPrice}</td>        
                                  </tr>
                              )
                          }
                      </tbody>

                    </table>
                 </div>

                
            </div>
        );
    }
}

export default ListRequestOrderComponent;