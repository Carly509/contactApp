import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class EditContact extends Component {
  constructor(props) {
    super(props);

    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullname: '',
      email: '',
      phone: '',
      adress: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contacts/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          fullname: response.data.fullname,
          email: response.data.email,
          phone: response.data.phone,
          adress: response.data.adress
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.fullname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangefullname(e) {
    this.setState({
      fullname: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeAdress(Adress) {
    this.setState({
      adress: Adress
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const contact = {
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      adress: this.state.adress
    }

    console.log(contact);

    axios.post('http://localhost:5000/contacts/edit/' + this.props.match.params.id, contact)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
        <div className= "form" align="center">
     
        <h3 style={{color: "rgb(49, 90, 86)"}}>Edit Contact</h3>
        <Form onSubmit={this.onSubmit}>
        <FormGroup controlId="Fullname"bsSize="large">
                  <ControlLabel >Name: </ControlLabel>
                  <FormControl className="fom" autoFocus type="text" name="fullname" placeholder="FIRST NAME/LAST NAME" value={this.state.fullname} onChange={this.handleChange}/>
          </FormGroup>
       
          <FormGroup  controlId="email" bsSize="large">
                  <ControlLabel >Email:  </ControlLabel>
                  <FormControl  className="fom" autoFocus type="email" name="email" placeholder="EMAIL" value={this.state.email} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="adress" bsSize="large">
                  <ControlLabel >Address:</ControlLabel>
                  <FormControl  className="fom" autoFocus type="text" name="address" placeholder="ADDRESS" value={this.state.address} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="number" bsSize="large">
                  <ControlLabel >Phone: </ControlLabel>
                  <FormControl  className="fom" autoFocus type="text" name="phone" placeholder="PHONE NUMBER" value={this.state.number} onChange={this.handleChange}/>
          </FormGroup>
  
          <Button
                  onClick={this.onSubmit}
                  block
                  bsSize="large"
                  type="submit"
                  >
                  Save
                  </Button>
                  </Form>
      </div>
    )
  }
}