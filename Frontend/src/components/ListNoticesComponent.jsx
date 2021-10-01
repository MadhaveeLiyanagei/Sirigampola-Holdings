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
        var tableStyle = {
            "border": "0.5px solid black"
         };
        return (
            <div>                
                <div className="row">
                    <>
                    <AdminEmployeeSideBar/>
                    </>
                    <h2 className="text-center"><br></br><br></br><u>Notices List</u><br></br><br></br></h2>
                    <button className="buttonNotice" onClick={this.addNotice}><b>Add Notice</b></button>
                </div>
                
                <div className="row">
                <center><br></br>
                    <table className="tabletxtclr" style={tableStyle}>
                        <thead>
                            <tr style={tableStyle}>
                                <th><center><h5>Notice</h5></center></th>
                                <th><center><h5>Update</h5></center></th>
                                <th><center><h5>Delete</h5></center></th>
                                <th><center><h5>View</h5></center></th> 
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.adNotices.map(
                                        adNotices => 
                                        <tr key = {adNotices.id}>
                                            <td style={tableStyle}>{adNotices.content}</td>
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
                    </table><br></br>
                    </center>
                </div>
            </div>
        )
    }
}
export default ListNoticesComponent