import React, { Component } from 'react'
import NoticesService from '../services/NoticesService';
import AdminEmployeeSideBar from './AdminEmployeeSideBar'
import Pdf from "react-to-pdf";

const ref = React.createRef();


/*View all the details of a single record*/

class ViewNoticesComponent extends Component {

    constructor(props){
        super(props)

            this.state = {
                id: this.props.match.params.id,
                
                adNotices: []
            }

           
        
    }

    componentDidMount(){
        NoticesService.getNoticesById(this.state.id).then(res =>{
            this.setState({adNotices: res.data});
        });
    }

    render() {
        return (
            <>
            <div>    
                <div className="row"><>
                <AdminEmployeeSideBar/>
                </>
                </div>
                </div>
          <div className="react-pdf__Page__canvas_Single_View">
            <div className="Post" ref={ref}>
              <br></br>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className="text-center"><u> View Notices Details</u></h3>
                    <div className ="card-body">               
                        <br></br>
                        <div className="row">
                            <label><b>Notice: </b></label>
                            <div>{this.state.adNotices.content}</div>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div><br></br>
            </div>  </div>
        <Pdf targetRef={ref} filename="Employee Notices.pdf">
          {({ toPdf }) => (
            <button className="button-report" onClick={toPdf}>
              {" "}
              Generate Report
            </button>
          )}
        </Pdf>
      </>
        );
    }
}


export default ViewNoticesComponent;