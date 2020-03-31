import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Table  } from 'reactstrap';

function Mytable(arg){
  var iteration = arg.rows;
  var onlyDate = "";
  var myMnth = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AGU','SEP','OCT','NOV','DIC'];
  var j = []
  var html = [];
  for(var i=0;i<iteration;i++){
    j[0] = Math.floor(Math.random() * 7)+2012;
    j[1] = Math.floor(Math.random() * 11);
    j[2] = Math.floor(Math.random() * 28)+1;
    j[3] = Math.floor(Math.random() * 23);
    j[4] = Math.floor(Math.random() * 59);
    onlyDate = new Date(j[0],j[1],j[2],j[3],j[4],0,0);
    onlyDate = String(onlyDate.getHours()+ "HR " + onlyDate.getDate() +"/" + myMnth[(onlyDate.getMonth())] +"/" + String(onlyDate.getFullYear()).slice(2,4));

    j[0] = Math.floor(Math.random() * 3)+1;
    if(j[0]==1){
      j[1] = "MOTOR GENERAL FAULT CONTACT SUPPORT";
      j[2] = "rgb(220,50,70)"
    }else if(j[0]==2){
      
      j[1] = "MOTOR TEMPERATURE EXCEEDED THRESHOLD";
      j[2] = "rgb(250,120,20)"
    }else{
      j[1] = "MOTOR TEMPERATURE NEAR THRESHOLD";
      j[2] = "rgb(200,200,0)"
    }


    html[i] = <tr key={i}  style={{borderColor:j[2],borderStyle:'solid',backgroundColor:"rgb(40,60,80)"}}>
                <th scope="row" className="text-center align-middle" style={{color:j[2]}}>{i+1}</th>
                <td className="align-middle" style={{color:j[2]}}>{"LEVEL "+j[0]}</td>
                <td className="align-middle text-center" style={{color:j[2]}}>{onlyDate}</td>
                <td className="align-middle " style={{color:j[2]}}>{j[1]}</td>
              </tr>

  }
 return <tbody 
          style={{color:"rgb(255,255,255)",fontFamily:"Open Sans",fontSize:"16px",fontStyle:"normal"}}>
          {html}
        </tbody>;
  
}

class Section31 extends Component {
  render() {
    
    return (
      <div >
        <Card className="m-1" style={{height:"675px", overflow:"auto",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            
          <Table className="table-borderless table-sm" style={{width:"99.5%"}}>
            <thead>
              <tr className="text-white" style={{fontFamily:"Baloo Chettan",fontSize:"23px",fontStyle:"normal"}}>
                <th className="text-center" style={{width:"5%"}}>#</th>
                <th style={{width:"5%"}}>LEVEL</th>
                <th className="text-center" style={{width:"15%"}}>DATE</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            
            <Mytable rows={100}/>
            
          </Table>
              
          </div>
        </Card>
      </div>
    );
  }
}

export default Section31;