import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Call from './components/Call';
import ContactList from './components/ContactList';
import './App.css';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHome,
  faUser,
  faVideo,
  faAddressCard,
  faMapMarkerAlt,
  faArrowCircleLeft,
  faEdit,
  faCamera,
  faTrash,
  faEye,
  faEnvelope,
  faUserPlus,
  faEyeSlash,
  faMobile,
  faCheckCircle,
  faPlus,
  faHeart,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faSearch,
  faHome,
  faAddressCard,
  faMapMarkerAlt,
  faUser,
  faEdit,
  faVideo,
  faArrowCircleLeft,
  faCamera,
  faTrash,
  faMobile,
  faUserPlus,
  faEnvelope,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faPlus,
  faHeart,
  faWindowClose
);

function App() {
  return (
    <Router>
    <Route>{/* <Route path="/" component={Login} exact /> */}</Route>  
    <div className="App">
    <Navbar/>  <Call/> 
    </div>
    <div className= "container">
   <ContactList/>
            </div>
    </Router>
  );
}

export default App;
