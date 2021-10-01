import React, { Component } from 'react'
import NoticesService from '../services/NoticesService'
import AdminEmployeeSideBar from './AdminEmployeeSideBar'
import SoloAlert from 'soloalert'

 class ListNoticesComponent extends Component {
    constructor(props){
        super(props)

        this.state={
                adNotices: [],

                
        }
        this.addNotice= this.addNotice.bind(this);
        this.editNotices=this.editNotices.bind(this);
        this.deleteNotices = this.deleteNotices.bind(this);
    }
        
    deleteNotices(id){

        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    NoticesService.deleteNotice(id)
                   await this.setState({
                        adNotices: this.state.adNotices.filter(adNotices => adNotices.id !== id)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/adNotices"
                        },

                    });

                } catch (err) {
                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/adNotices"
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
                <div className="row">
                    <>
                    <AdminEmployeeSideBar/>
                    </>
                    <h2 className="text-center"><br></br><br></br><u>Notices List</u><br></br><br></br></h2>
                    <button className="button" onClick={this.addNotice}><b>Add Notice</b></button>
                </div>
                
                <div className="row">
                <center><br></br>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                
                                <th>Notice</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>View</th> 
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.adNotices.map(
                                        adNotices => 
                                        <tr key = {adNotices.id}>
                                            <td>{adNotices.content}</td>
                                            <td>
                                                <button onClick={() => this.editNotices(adNotices.id)}className="button-up">Update</button>
                                            </td>
                                            <td>
                                               <button onClick = {() => this.deleteNotices(adNotices.id)} className= "button-dele">Delete</button>
                                            </td>
                                            <td>
                                          <button onClick = {() => this.viewNotices(adNotices.id)} className= "button-view">View</button>
                                         </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                    </center>
                </div>
            </div>
        )
    }
}
export default ListNoticesComponent