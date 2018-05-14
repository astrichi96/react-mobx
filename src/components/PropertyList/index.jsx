import React, { Component } from 'react';
import { Panel, Button, Glyphicon, OverlayTrigger,Row, Col } from 'react-bootstrap'; // the individual components of the react-bootstrap library are imported
import popoverButton from '../Popover'      /* Component is imported that will show a small information about 
                                               the available button to edit the properties */

/*  Some styles are defined to apply directly to the components that are to be defined in the class  */
const styles = {
    body: {
      fontWeight: 'bold'
    }
}

export default class PropertyList extends Component {

    /*
        Within the Panel component imported from react-bootstrap, the "Name" property passed as 
        property of the parent component will be shown as title, in the same way the "Message" 
        property will be displayed in the body of the panel.

        The "Edit" button triggers the event implemented in the parent component that causes the 
        rendering of the component that allows entering information to edit the status of the properties
    */
    render(){
        return(
            <div>
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title 
                        componentClass="h3"
                    >
                    <Row>
                        <Col sm = {10}> 
                            <span style = {styles.body}>Name: </span>{this.props.name}
                        </Col>
                        <Col Col >
                            <OverlayTrigger
                                trigger={['hover', 'focus']}
                                placement="bottom"
                                overlay={popoverButton}>
                                    <Button  
                                        bsSize="small"
                                        bsStyle="primary" 
                                        onClick= {this.props.onOpenText} > 
                                            <Glyphicon glyph="pencil" /> <span>Edit </span>
                                    </Button>
                            </OverlayTrigger>
                        </Col>   
                    </Row>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body><span style = {styles.body}>Message: </span>{ this.props.message }</Panel.Body>
            </Panel>
            </div>
        )
    }

}
