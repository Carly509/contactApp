import React from 'react';
import {Button, FormGroup, FormControl,ControlLabel} from 'react-bootstrap';
//import API from '../../utils/API';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange.bind(this);
        //this.send.bind(this)
    }
    handleChange = event  => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render(){
        return(
            <div className="Login">
            <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
            </FormGroup>
            <Button
            onClick={this.send}
            block
            bsSize="large"
            type="submit"
            >
            Connexion
            </Button>
        </div>

        )
    }
}