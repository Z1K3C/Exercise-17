import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Head from './z_Head.jsx';
import Left from './z_Left.jsx';
import Section_11 from './z_Section11.jsx';
import Section_12 from './z_Section12.jsx';
var Htmlvar;
var Colvar;

class App extends Component {
  constructor(props) {
    super(props);
    this.FuncionA_FrAPP = this.FuncionA_FrAPP.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      Colprop: Colvar,
      Htmlprop: Htmlvar,
      width: window.innerWidth
    };
  }

  componentDidMount() {  
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {           
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    if(window.innerWidth<1000){
      Htmlvar = "";
      Colvar = 12;
    }
    else{
      Htmlvar = <Col lg="2" className="px-0"><Left/></Col>;
      Colvar = 10;
    }
    this.setState({
      Colprop: Colvar,
      Htmlprop: Htmlvar,
      width: window.innerWidth
    });
  }
    
  FuncionA_FrAPP(e){
    if(e){
      Htmlvar = <Col lg="2" className="px-0"><Left/></Col>;
      Colvar = 10;
    }else{
      Htmlvar = "";
      Colvar = 12;
    }  
    this.setState({
      Colprop: Colvar,
      Htmlprop: Htmlvar
    });
  }

  render() {
    return (
      <div id="App" className="">
        <Container fluid={true} className="px-0">
          <Row className="mx-0">

            {this.state.Htmlprop}

            <Col lg={this.state.Colprop} id="COL_2" className="px-0">

              <Head FuncionA_FrAPP={this.FuncionA_FrAPP}/>
              <Section_11/>
              <Section_12 PropA_FrAPP={this.state.Colprop}/>

            </Col>
          </Row>
        </Container>

        
      </div>
    );
    
  }
}

export default App;
