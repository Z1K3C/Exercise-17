import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Button,ListGroup, ListGroupItem,Card, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faClipboard, faCogs, faClone, faColumns} from '@fortawesome/free-solid-svg-icons';

class Left extends Component {
  render() {
    return (
      <div>
        
        <ListGroup className="pb-2">
        
          <ListGroupItem className="pt-3 px-0" style={{backgroundColor:"transparent"}}>
          
            <Row className="mx-0 align-items-center">
              <Col lg="12" xs="4" className="px-2 text-center">
                <img src="./ADMIN.png" height="100px" alt=""/>
              </Col>
              <Col lg="12" xs="8" className="px-2 py-2">
                <Card body className="p-1 text-center" style={{backgroundColor:"rgb(60,80,100)"}}>
                  <CardTitle className="text-white">Carlos Villagran</CardTitle>
                  <CardText className="text-white">Administrator</CardText>
                </Card>
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="p-0" style={{backgroundColor:"transparent"}}>
            <Row className="mx-0">
              <Col lg="12" xs="6" className="px-0">
                <Button  color="success" className="w-100 text-left" style={{backgroundColor:"transparent" ,borderColor:"rgb(20,190,150)"}}>
                  <FontAwesomeIcon icon={faHome} className="" style={{fontSize:"20px",color:"rgb(20,190,150)"}}/>
                  <span className="px-1"> HOME</span>
                </Button>
              </Col >
              <Col lg="12" xs="6" className="px-0">
                <Button  color="success" className="w-100 text-left" style={{backgroundColor:"transparent",borderColor:"rgb(20,190,150)"}}>
                  <FontAwesomeIcon icon={faChartLine} className="" style={{fontSize:"20px",color:"rgb(20,190,150)"}}/>
                  <span className="px-1"> GRAPHS</span>
                </Button>                  
              </Col>
            </Row>
          </ListGroupItem>

          <ListGroupItem className="p-0" style={{backgroundColor:"transparent"}}>
              <Row className="mx-0">
                <Col lg="12" xs="6" className="px-0">
                  <Button  color="success" className="w-100 text-left" style={{backgroundColor:"transparent",borderColor:"rgb(20,190,150)"}}>
                    <FontAwesomeIcon icon={faClipboard} className="" style={{fontSize:"20px",color:"rgb(20,190,150)"}}/>
                    <span className="px-2"> HISTORY</span>
                  </Button>
                </Col >
                <Col lg="12" xs="6" className="px-0">
                  <Button  color="success" className="w-100 text-left" style={{backgroundColor:"transparent",borderColor:"rgb(20,190,150)"}}>
                    <FontAwesomeIcon icon={faCogs} className="" style={{fontSize:"20px",color:"rgb(20,190,150)"}}/>
                    <span className="px-0"> CONFIGURATION</span>
                  </Button>                  
                </Col>
              </Row>
            </ListGroupItem>

          <ListGroupItem className="p-0" style={{backgroundColor:"transparent"}}>
            <Row className="mx-0">
              <Col lg="12" xs="6" className="px-0">
                <Button  color="success" className="w-100 text-left" style={{backgroundColor:"transparent",borderColor:"rgb(20,190,150)"}}>
                  <FontAwesomeIcon icon={faClone} className="" style={{fontSize:"20px",color:"rgb(20,190,150)"}}/>
                  <span className="px-2"> OTHER</span>
                </Button>
              </Col >
              <Col lg="12" xs="6" className="px-0">
                <Button  color="success" className="w-100 text-left" style={{backgroundColor:"transparent",borderColor:"rgb(20,190,150)"}}>
                  <FontAwesomeIcon icon={faColumns} className="" style={{fontSize:"20px",color:"rgb(20,190,150)"}}/>
                  <span className="px-2" > ABOUT</span>
                </Button>                  
              </Col>
            </Row>
          </ListGroupItem>

        </ListGroup>
      </div>
    );
  }
}

export default Left;