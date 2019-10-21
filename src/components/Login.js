import React from "react";
import { Link } from "react-router-dom";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
      }

      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          email: this.state.email,
          password: this.state.password
        }
    
        console.log(user);
    }

    render(){
        return (
           
<div id="formWrapper">

<div id="form">
		<div className="form-item">
			<p className="formLabel">Email</p>
			<input type="email" name="email" id="email" className="form-style" autocomplete="off"/>
		</div>
		<div className="form-item">
			<p className="formLabel">Password</p>
			<input type="password" name="password" id="password" className="form-style" />
			 <div className="pw-view"><i className="fa fa-eye"></i></div> 
			<p><a href="#" ><small>Forgot Password ?</small></a></p>	
		</div>
		<div className="form-item">
		<p className="pull-left"><a href="#"><small>Register</small></a></p>
		<input type="submit" className="login pull-right" value="Log In"></input>
		<div className="clear-fix"></div>
		</div>
</div>
</div>

        );
    }
}