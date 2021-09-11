import React, { Component } from 'react';

/*Create request order*/
class CreateRequestOrderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

            productID: '',
            productName: '',
            reOrder: '',
            Description: '',

        }

        this.listRequestOrder = this.listRequestOrder.bind(this);
    }

    listRequestOrder(){
        this.props.history.push('/requestOrder');
     }

    render() {
        return (
            <div>
                 <button className = "btn btn-primary" onClick={this.listRequestOrder}>Requested Orders</button>
            </div>
        );
    }
}

export default CreateRequestOrderComponent;