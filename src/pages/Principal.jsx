import React, { Component } from 'react'
import Login from '../components/Login';
import Home from '../components/Home.jsx';
import  { Redirect } from 'react-router-dom'

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            localStorage.getItem('myRemember') ?
            <Redirect to="/home" />
            :
            <Redirect to="/login" />
         );
    }
}
 
export default Principal;