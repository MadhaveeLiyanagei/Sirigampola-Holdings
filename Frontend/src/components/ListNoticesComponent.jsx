import React, { Component } from 'react'
import NoticesService from '../services/NoticesService'

 class ListNoticesComponent extends Component {
    constructor(props){
        super(props)

        this.state={
                adNotices: []
        }
        this.addNotice= this.addNotice.bind(this);
        this.editNotices=this.editNotices.bind(this);
        this.deleteNotices = this.deleteNotices.bind(this);



    }
        
    deleteNotices(id){
        NoticesService.deleteNotice(id).then( res => {
            this.setState({adNotices: this.state.adNotices.filter(adNotices => adNotices.id !== id)}

        
            );
        
        });
    }


    editNotices(id){
        this.props.history.push(`/update-adNotices/${id}`);
    }

    componentDidMount(){
        NoticesService.getNotices().then((res)=>{
            this.setState({adNotices:res.data});
        });
    }
    viewNotices(id){
        this.props.history.push(`/view-adNotices/${id}`);
      }

    addNotice(){
        this.props.history.push('/add-adNotices');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Notices List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addNotice}>Add Notice</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Notice ID</th>
                                <th>Notice</th>
                                <th></th>
                                <th></th>
                                <th></th> 
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.adNotices.map(
                                        adNotices => 
                                        <tr key = {adNotices.id}>
                                            <td>{adNotices.id}</td>
                                            <td>{adNotices.content}</td>
                                            <td>
                                                <button onClick={() => this.editNotices(adNotices.id)}className="btn btn-info">Update</button>
                                            </td>
                                            <td>
                                               <button onClick = { () => this.deleteNotices(adNotices.id)} className= "btn btn-danger">Delete</button>
                                            </td>
                                            <td>
                                          <button onClick = { () => this.viewNotices(adNotices.id)} className= "btn btn-info">View</button>
                                         </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListNoticesComponent