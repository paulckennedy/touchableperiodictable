import React, { Component } from 'react';
import Element from './element';
import data from '../PeriodicTableJSON.json';
import PropTypes from 'prop-types';
//import '../../style/table.css';

class Table extends Component{
    printColumnLabel(i){
        var columnname = 'c' + i;
        return(<div className={columnname}>{i}</div>) ;
    };

    printRowLabel(i){
        var columnname = 'r' + i;
        return(<div className={columnname}>{i}</div>) ;
    };

    printSingleElement(element){
        if(element.category != 'lanthanide' && element.category != 'actinide'){
            return(  
                <Element
                    phase={element.phase}
                    category={element.category}                    
                    atomic_number={element.number} 
                    symbol={element.symbol} 
                    atomic_weight={(element.atomic_mass).toFixed(4)} 
                    element_name={element.name}
                    key={element.number}
                  />
            );
        }
      }
    
      printLanthanideSingleElement(element){
        if(element.category === 'lanthanide'){
            return(  
                <Element
                    phase={element.phase}
                    category={element.category}                    
                    atomic_number={element.number} 
                    symbol={element.symbol} 
                    atomic_weight={(element.atomic_mass).toFixed(4)} 
                    element_name={element.name}
                    key={element.number}
                  />
            );
        }
      }

      printActinideSingleElement(element){
        if(element.category === 'actinide'){
            return(  
                <Element
                    phase={element.phase}
                    category={element.category}                    
                    atomic_number={element.number} 
                    symbol={element.symbol} 
                    atomic_weight={(element.atomic_mass).toFixed(4)} 
                    element_name={element.name}
                    key={element.number}
                  />
            );
        }
      }
    
     render() {
        var columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        var rows = [1,2,3,4,5,6,7,8];
        const Lanthanides = data.elements.map(element => this.printLanthanideSingleElement(element));
        const Actinides = data.elements.map(element => this.printActinideSingleElement(element));
        const columnList = columns.map(index => this.printColumnLabel(index));
        const rowList = rows.map(index => this.printRowLabel(index));
        const list = data.elements.map(element => this.printSingleElement(element));
        return (  
            <div className="Table">
                <div className="b0"></div>
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
                <div className="b4"></div>
                <div className="b5"></div>
                {columnList}
                {rowList}
                {list}
                {Lanthanides}
                {Actinides}
            </div>
        )
      }
}


Element.propTypes = {
    phase: PropTypes.string,
    category: PropTypes.string,
    atomic_number: PropTypes.number,
    symbol: PropTypes.string,
    atomic_weight: PropTypes.number,
    element_name: PropTypes.string
}

export default Table;