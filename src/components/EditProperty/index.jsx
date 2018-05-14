import React, { Component } from 'react'
import { Button, FormControl, FormGroup, Row, Panel } from 'react-bootstrap'// the individual components of the react-bootstrap library are imported

/*  Some styles are defined to apply directly to the components that are to be defined in the class  */
const styles = {
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  buttons: {
    marginLeft: 10,
    paddingRight: 10, 
  }
}

export default class EditProperty extends Component {
    /*
        Within the panel component imported from react-bootstrap will be located the form where the 
        information to be updated will be entered.

        You will find two fields to be filled, one for the "name" property and another for "message" 
        to update the information that is entered, you must click on the "Update" button which will 
        trigger the event defined in the parent component.

        The "Close" button will only close the panel that has appeared to enter information and no 
        change will be made
    
    */
    render(){
        return(
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Edit your information here!</Panel.Title>
                </Panel.Heading>
                <form onSubmit={this.props.onSendText}>
                    <Panel.Body style = {styles.container}>
                        <Row>
                            <FormGroup>
                                <FormControl
                                    defaultValue= { this.props.name }
                                    bsSize = "small"
                                    name="name"/>
                                </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup>
                                <FormControl
                                    defaultValue= { this.props.message }
                                    name ="message"
                                    componentClass="textarea"/>
                                </FormGroup>
                        </Row>
                    </Panel.Body>
                    <Panel.Footer className = "text-right">
                        <Button  style = { styles.buttons } bsSize="xlarge" type='submit'bsStyle="primary" >Update </Button>
                        <Button  style = { styles.buttons } bsSize="xlarge"  onClick={this.props.onCloseText} >Close </Button>
                    </Panel.Footer>
                </form>
            </Panel>
        )}
    }


