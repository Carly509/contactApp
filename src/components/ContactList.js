/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Accordion, AccordionItem } from 'react-sanfona';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


      // <Link to={"/edit/"+props.contact._id}>edit</Link> | <a href="#" onClick={() => { props.deletecontact(props.contact._id) }}>delete</a>
 

export default class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.deleteContact = this.deleteContact.bind(this)
   

    this.state = {
      paginationValue: '50',
      contact: []};
  }


  componentDidMount() {
    axios.get('http://localhost:5000/contacts/')
      .then((response) => { 
        // const contact = response.data.map((contacts) =>({
        //   id: contacts.id,
        //   fullname: contacts.fullname
        // }));
        this.setState({ contact: response.data});
      })
      .catch((error) => {
        console.log(error);
      });

    }

      deleteContact(e,id) {
        e.preventDefault();
        axios.get('http://localhost:5000/contacts/delete/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          contact: this.state.contact.filter(el => el._id !== id)
        })
      //  window.location = '/';
  }

  
  
  // ContactList() {
  //   return this.state.contact.map(eachcontact => {
  //     return <li key={eachcontact._id}><Avatar name={eachcontact.fullname} size="25" round={true} />  {eachcontact.fullname}</li>
  //   })
  // }

  render() {
    return (
      <div className ="container">
        <h3 style={{color: "rgb(49, 90, 86)"}}>{this.state.contact.lenght} CONTACTS</h3>
         <Accordion>
        {this.state.contact.map(item => {
          return (
       <AccordionItem title={`${item.fullname}`} expanded={item === 1}>
        
              <div className = "prof">
              <div className="align">
       <li> <FontAwesomeIcon icon="user" size="lg"/>  </li>
      <li> <FontAwesomeIcon icon="envelope" size="lg"/> </li> 
      <li><FontAwesomeIcon icon="mobile" size="lg"/> </li>
      <li> <FontAwesomeIcon icon="map-marker-alt" size="lg"/> </li>
     </div>  
              
    <ol>
                <button className = "coinn"> <Link to={"contacts/edit/"+item._id}></Link><FontAwesomeIcon icon="edit"/>  </button>  
                <button className = "coin" onClick={(e)=>this.deleteContact(e,item._id)}>  <FontAwesomeIcon icon="trash"/></button>
       <div className ="av"> <Avatar name={item.fullname} size="35" round={true} /></div>  
    
          <li> {`${item.fullname}`}</li>  
          <li>   {`${item.email}`} </li>   
          <li>   {`${item.phone}`} </li>  
          <li>     {`${item.address}`} </li>  
    </ol>
     <ul className="social-icon-list">
            <li>
              <a
                href="https://www.facebook.com/carlytesnor"
                className="social-link"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} size="xs" />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/carlytesnor"
                className="social-link"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} size="xs" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/TesnorC" className="social-link">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="xs" />
              </a>
            </li>

            <li>
              <a href="https://github.com/tazz509" className="social-link">
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/carly-r-tesnor-633736160/"
                className="social-link"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="xs" />
              </a>
            </li>
       </ul>
        </div>
            </AccordionItem> 
          );
        })}
      </Accordion>      
      </div>
    )
  }
}