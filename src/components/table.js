import React, { Component } from 'react';
import Element from './element';
import data from '../PeriodicTableJSON.json';
import PropTypes from 'prop-types';
//import '../../style/table.css';

class Table extends Component{
    printSingleElement(element){
        return(  
                <Element 
                    atomic_number={element.number} 
                    symbol={element.symbol} 
                    atomic_weight={element.atomic_mass} 
                    element_name={element.name}
                    key={element.number}
                  />
        );
      }
    
     render() {
        const list = data.elements.map(element => this.printSingleElement(element));
        return (   
            <div className="Table">{list}</div>
        )
      }
}


Element.propTypes = {
    atomic_number: PropTypes.number,
    symbol: PropTypes.string,
    atomic_weight: PropTypes.number,
    element_name: PropTypes.string
}

export default Table;