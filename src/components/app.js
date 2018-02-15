import React, { Component } from 'react';
import Element from './element';
import data from 'json-loader!../PeriodicTableJSON.json';
//console.log(data);

export default class App extends Component {
  constructor(props){
    super(props);
  }

  printSingleElement(element){
    return  <li>
              <Element 
                atomic_number='1' 
                symbol='H' 
                atomic_weight='1.0069' 
                element_name='Hydrogen'
              />
            </li>;
  }

  printAllOfTheElements(){
    return 
    <ul>  
      {
        data.map(element => this.printSingleElement(element))
        //this.printSingleElement(element)
      }
    </ul>
  }
  
  render() {
    return (
      <div>
        <Element 
                atomic_number = '1' 
                symbol='H' 
                atomic_weight = '1.0069' 
                element_name='Hydrogen'
              />
      </div>
    );
  }
}

/*
          
<ul>
        
        </ul>
        
          
  }
          */