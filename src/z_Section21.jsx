import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import 'bootstrap/dist/css/bootstrap.css';
import Gconfig2 from './t_graph_config2.js';
import { Container, Row, Col, Card } from 'reactstrap';

function MyGraphArray() {
  var i=0;
  var html1 = Gconfig2.map((info) =>
    <Col key={i++} sm="6" xs="12" className="px-1">
    
      <Card key={i++} className="m-1" style={{height:"200px",backgroundColor:"rgb(60,80,100)"}}>
        <Plot key={i++}
          data={[info[2],info[3],info[4]]} layout={info[0]} config={info[1]}
        />
      </Card>

    </Col>
  );
  return (
    <Row className="mx-0">{html1}</Row>
  );
}


class Section21 extends Component {
  render() {

    
    return (
      <div >
        <Card className="m-1" style={{height:"675px", overflow:"auto",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            
            <MyGraphArray/>
              
          </div>
        </Card>
      </div>
    );
  }
}

export default Section21;