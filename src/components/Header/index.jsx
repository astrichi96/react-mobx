import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap' /* Navbar meta is imported components that serve as navigation headers 
                                            for the application or site available with react-bootstrap.*/

export default class Header extends Component {
    /*    
        In the Navbar header, the "name" property defined in the store is shown, offering detailed control 
        of its status when it is modified.
    */
    render(){
        return(
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a>Welcome back! {this.props.name}</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}