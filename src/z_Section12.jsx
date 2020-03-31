import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'reactstrap';
import Gconfig from './t_graph_config1.js';

function MyGraphArray() {
  var i=0;
  var html1 = Gconfig.map((info) =>
    <Card key={i++} className="m-2" style={{height:"200px",backgroundColor:"rgb(60,80,100)"}}>
      <Plot key={i++}
        data={[info[0]]} layout={info[1]} config={info[2]}
      />
    </Card>
  );
  return (
    <div>{html1}</div>
  );
}

class Section12 extends Component {
  

  render() {
    if(360<window.innerWidth){
      Gconfig[1][1]['font']['size'] = 18;
    }else{
      Gconfig[1][1]['font']['size'] = 10;
    }
    console.log();
    return (
      <div >
        <Card className="m-1" style={{height:"520px", overflow:"auto",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            
            <MyGraphArray/>
            
          </div>
        </Card>
      </div>
    );
  }
}

export default Section12;