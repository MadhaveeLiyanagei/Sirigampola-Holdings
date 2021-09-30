import React, { Component } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import AuthenticationService from '../Authentication/AuthenticationService';
import AthenticationDataService from '../Authentication/AuthenticationDataService';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.match.params.userId,
            
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]:event.target.value}
        )
    }

    loginClicked() {
        AthenticationDataService.getUser(this.state.userId)
            .then(
                response => {
                    if(response.data != null){
                        if(this.state.password === response.data.password){
                            AuthenticationService.successfulLogin(response.data.userId, 'Name', response.data.role)
                            this.props.history.push("/")
                            this.setState({showSuccessMsg: true})
                            this.setState({hasLoginFailed: false})
                        }
                        else{
                            this.setState({showSuccessMsg: false})
                            this.setState({hasLoginFailed: true})
                        }
                    }
                    else{
                        this.setState({showSuccessMsg: false})
                        this.setState({hasLoginFailed: true})
                    }
                }
            )
    }

    
    render() {


        return ( 
            <Container style={{width:600}}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className="form">
                <Form>
                    <Form.Label style={{fontWeight:"bold", fontSize:30, paddingBottom:20}}>LOGIN</Form.Label>
                    {this.state.hasLoginFailed && <Alert variant="danger">Invalid credentials</Alert>}
                    

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" placeholder="User ID" name="userId" value={this.state.userId} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                        We'll never share your passwords with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remeber me" />
                    </Form.Group>
                    <Button variant="dark" onClick={this.loginClicked} style={{fontWeight:600, fontSize:20}}>
                        Login
                    </Button>
                    <Form.Group>
                        <Link to="forgotpassword" style={{textDecoration:"none"}}><p style={{marginTop:10, color:"red"}}>Forgot password ?</p></Link>
                    </Form.Group>
                </Form>
            </div>
                <br></br>
                <br></br>
                <br></br>
            </Container>
         );
    }
}
 
export default Login;