import './App.css';
import React,{Component} from 'react';
import {render} from 'react-dom';
import Discount from './Discount';
import Discount1 from './Discount1';
import Info from './Info';


class App extends Component{
  render(){
    return(
      <div className="Main">
        <div className="picture"></div>

        <div className="title">
          <div className="logo">movies</div>
          <div className="portal">Filmmaker Portal</div>
        </div>

        <div className="panel"></div>

        <div className="plan">
          Basic Plans
         </div>
          <button type="submit" id="f6">
         
            <div className="f6p">6 Films - $49.99</div>
            <div className="f6y">/ Year</div>
           <div className="f6c">Upload 6 Film - Charged yearly - Non-refundable</div>
           <Discount></Discount>
          
          </button>

          <button type="submit" id="f3">
          <div className="f3p">3 Films - $39.99</div>
          <div className="f3y">/ Year</div>
            <div className="f3c">Upload 3 Film - Charged yearly - Non-refundable</div>
            <Discount1></Discount1>
          </button>

          <button type="submit" id="f1">
          <div className="f1p">1 Film - $29.99</div>
          <div className="f1y">/ Year</div>
            <div className="f1c">Upload 1 Film - Charged yearly - Non-refundable</div>
          </button>
        
        <div className="plan1">A Film Company Plan</div>
        <button type="submit" id="p1">
          <div className="p1p">300 Films - $1,700.00</div>
          <div className="p1y">/ Year</div>
            <div className="p1c">Upload 6 Film - Charged yearly - Non-refundable</div>
          </button>

        <div className="terms"><Info></Info></div>
        <div className="lic">© 2020 films. All Rights Reserved.</div>
      </div>
    );
  }
}

export default App;
