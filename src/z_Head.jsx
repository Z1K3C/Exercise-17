import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
var togglevar;

class Head extends Component {
  constructor(props) {
    super(props);
    this.funcion1 = this.funcion1.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      toggleprop: false
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
      togglevar = true;
    }else{
      togglevar = false;
    }
    this.setState({
      toggleprop: togglevar
    });    
  }

  funcion1() {
    this.setState({
      toggleprop: !this.state.toggleprop
    });
    this.props.FuncionA_FrAPP(this.state.toggleprop);
  }

  render() {
    return (
      <div >
        <nav className="navbar">
          <Button className="navbar-brand nav-item" onClick={this.funcion1}><FontAwesomeIcon icon={faBars} /></Button>
          <span className="nav-item mr-auto text-white" style={{fontFamily:'Germania One',fontSize:"28px"}}>Assembly Line</span>
        </nav>
      </div>
    );
  }
}

export default Head;