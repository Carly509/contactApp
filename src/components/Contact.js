import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Contact extends Component {
    constructor(props) {
      super();
  
      this.state = {
        contact: [],
        showContact: false
      };
      this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
      this.setState({showContact: true});
   }

    componentDidMount() {
        axios.get('http://localhost:5000/contacts/:id')
          .then(response => {
            this.setState({ contact: response.data })
          })
          .catch((error) => {
            console.log(error);
        })
    }

        render(){
        return(
          <button onClick={this.handleClick}></button>
        )}
    }
