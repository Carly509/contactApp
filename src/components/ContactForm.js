import React, { Component } from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import img from '../images/img.png';


export default class CreateContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      address: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);  
  }

//   componentDidMount() {
//     axios.get('http://localhost:5000/contacts/create')
//     .then(res => console.log(res.data));

//     this.setState({
//       fullname: '',
//       email: '',
//       adress: '',
//       number: ''
//     })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const contact = {
      fullname: this.state.fullname,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone
    }

    console.log(contact);

    axios.post('http://localhost:5000/contacts/create', contact)
      .then(res => console.log(res.data));

      window.location = '/';
  }

  render() {
    return (
      <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={img} alt="IMG"/>
        </div>
      <Form className="contact1-form validate-form" onSubmit={this.onSubmit}>
      <span className="contact1-form-title">
			<h2 style={{color: "rgb(49, 90, 86)"}}>	Get in touch </h2>	
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name"></input>
					<span className="shadow-input1"/>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input className="input1" type="text" name="email" placeholder="Email"></input>
					<span className="shadow-input1"/>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "required">
					<input className="input1" type="number" name="phone" placeholder="Phone Number"></input>
					<span className="shadow-input1"/>
				</div>

        <div className="wrap-input1 validate-input" data-validate = "required">
					<input className="input1" type="text" name="address" placeholder="Address"></input>
					<span className="shadow-input1"/>
				</div>
      <div className="container-contact1-form-btn">
					<button className="contact1-form-btn">
						<span>
							Create Contact
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
          </div>
                </Form>
                </div>
    </div>
    );
  }
}