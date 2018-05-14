import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';  // the individual components of the react-bootstrap library are imported
import { observer } from 'mobx-react'              /* MobX adds the observer function, which wraps the rendering function of 
                                                      the component to make sure that any data that is used and updated at 
                                                      the time of the change */


import Header from '../Header'                      /* Component is imported with the header created with react-bootstrap */
import EditProperty from '../EditProperty'          /* Import component where you edit the information contained in the 
                                                       properties "name" and "message" defined in the store*/
import PropertyList from '../PropertyList'          /* The component where the "Name" and "Message" properties are displayed 
                                                       is imported*/


@observer class App extends Component {
  constructor(){
    super()
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleSendText =  this.handleSendText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
  }

  /*
    Function that is called when the event occurs in the PropertyList child component by pressing the "Edit" button, 
    this method communicates with the openText () event defined in the Store, which changes the status of the "open" 
    property to true
  */
  handleOpenText(event){
    event.preventDefault()
    this.props.store.openText() 
  }

  /*
    Function that is called when the event occurs in the EditProperty child component by pressing the "Close" button, 
    this method communicates with the closeText () event defined in the Store, which changes the status of the "open" 
    property to false
  */
  handleCloseText(event){
    event.preventDefault()
    this.props.store.closeText()  
  }

  /*
    Function that evaluates if the open property defined in the store is true, in this case it will render the 
    EditProperty component and send the properties of the events that can be activated
  */
  renderOpenText(){
    if(this.props.store.getOpenText){
        return(
          <EditProperty 
            name = { this.props.store.getName }
            message = { this.props.store.getMessage }
            onSendText = { this.handleSendText}
            onCloseText = {this.handleCloseText }
          />
        )
    }
  }

  /*
    Function that is called when the event occurs in the EditProperty child component by pressing the "Update" button, 
    this method communicates with the editStates () event defined in the Store, which changes the status of the "name" 
    and "message" property "by which the user enters the text fields available for this
  */
  handleSendText (event){
      event.preventDefault()
      let name = event.target.name.value
      let message = event.target.message.value
      this.props.store.editStates(name, message)
      this.props.store.closeText()
  }


  render() {
    /*
      The Header component is rendered where the header is defined, along with the PropertyList component where the 
      "name" and "Message" properties are displayed

      If possible, the EditProperty component will be returned, after evaluating the function renderOpenText()
    */
    return (
      <div >
        <Header name={this.props.store.getName}/>
        <Grid >
          <Row>
            <Col md={8} >
              <PropertyList 
                className="App"
                name = {this.props.store.getName }
                message = { this.props.store.getMessage }
                onOpenText = { this.handleOpenText }
                />
            </Col>
        
          </Row>
          <Row>
            <Col sm={8}>
              {this.renderOpenText()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
