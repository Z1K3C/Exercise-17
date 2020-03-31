import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'reactstrap';
var myfontsize= "30px"

class Section11 extends Component {
  render() {
    if(460<window.innerWidth){
      myfontsize = "40px";
    }else{
      myfontsize = "30px";
    }
    
    return (
      <div className="mx-1">
        <Card style={{opacity:"0.8",minHeight:"150px", backgroundImage:"url(./IMG_1.jpg)",backgroundPosition: "30% 20%"}}>
          <Card className="text-white" style={{backgroundColor:"rgba(0,0,0,0.9)",minHeight:"100px"}}>
            <Container fluid={true}>
              <Row className="align-items-center" style={{minHeight:"100px"}}>
                <Col md="7" className="">
                  <p className="text-left mb-0"  style={{fontFamily:"ZCOOL QingKe HuangYou",fontSize:myfontsize}}>Real Time Monitoring System </p>
                  <p className="text-left mb-0"  style={{fontFamily:'Germania One',fontSize:"26px"}}> Welcome</p>
                  
                </Col>
                <Col md="5">
                  <Row className="justify-content-center">
                    <Col xs="4" className="text-center">
                      PERRO
                    </Col>
                    <Col xs="4" className="text-center">
                      GATO
                    </Col>
                    <Col xs="4" className="text-center">
                      PERICO
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>           
          </Card>
        </Card>
      </div>
    );
  }
}

export default Section11;