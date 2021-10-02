import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import SoloAlert from 'soloalert'


class ListProductComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
          

            product: [],
            searchId:''

        }

        this.addProduct = this.addProduct.bind(this);
        this.editProduct= this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProduct().then((res) => {
             this.setState({ product : res.data});
        }
       );
    }

    viewProduct(productID){
      this.props.history.push(`/view-product/${productID}`);
    }

    editProduct(productID){
        this.props.history.push(`/update-product/${productID}`);
    }

    deleteProduct(productID){
        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    ProductService.deleteProduct(productID)
                   await this.setState({
                        product: this.state.product.filter(product => product.productID !== productID)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/product"
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
                            window.location = "/product"
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


    addProduct(){
        this.props.history.push('/add-product');
    }

    searchProductbyName(event){

        this.setState({ searchId: event.target.value.substr(0,20)});
      }

    render() {

        let filterProductName = this.state.product.filter((

            product)=>{

                return product.productName.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

            }
        );

        return (
            <div>
                <h2 className="text-center">Products</h2>
                <div className = "row">
                    <button className = "button" onClick={this.addProduct}>Add Product</button>
                </div>
                <div className = "form-group col-md-4">
                      <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Product Name" value={this.state.searchId} onChange={this.searchProductbyName.bind(this)}/>
                 </div>
                    <br></br>
                 <div className = "row">
                   <table className="table table-striped table bordered">

                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Product Details</th>
                          <th>Selling Price</th>
                          <th>Product Image</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                          {
                               filterProductName.map(
                                product=>
                              //this.state.product.map(
                                //product =>
                                  <tr key = {product.productID}>
                                      <td>{product.productName}</td>
                                      <td>{product.productDetails}</td>
                                      <td>{product.productPrice}</td>
                                      <td>{product.productImage}</td>
                                      <td>
                                          <button onClick = { () => this.editProduct(product.productID)} className= "button-up">Update</button>
                                      </td>
                                      <td>
                                          <button onClick = { () => this.deleteProduct(product.productID)} className= "button-dele">Delete</button>
                                      </td>
                                      <td>
                                          <button onClick = { () => this.viewProduct(product.productID)} className= "button-view">View</button>
                                      </td>
                                      
                                     
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

export default ListProductComponent;