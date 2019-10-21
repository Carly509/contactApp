import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateContact from './ContactForm';


export default class Call extends Component  {
    constructor(props) {
     super(props);
     this.state = {
        showComponent: false,
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleOutClick = this.handleOutClick.bind(this);
    }
    handleClick() {
        this.setState({showComponent: true});
    }
    handleOutClick() {
      this.setState({showComponent: false});
    }

    render() {
      const showComponent = this.state.showComponent;
    let button;

    if (showComponent) {
      button =  <button onClick={this.handleOutClick}><FontAwesomeIcon icon="window-close"/></button>
      
    } else {
      button =  <button onClick={this.handleClick}><FontAwesomeIcon icon="user-plus"/></button>
    }

      return (
        <div>
         {button}
         {this.state.showComponent ?
            <CreateContact /> :
            null
         }
      </div>
      );
    }
  }
  