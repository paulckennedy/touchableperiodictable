import React, { Component } from 'react';
import Element from './element';
import CloseupElement from './closeup_element';
import data from '../PeriodicTableJSON.json';
import PropTypes from 'prop-types';
import Closeup from './closeup';
import Modal from './Modal';

import '../../style/table.css';

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            hoveredElement: {},
            isOpen: false
        };

        this.elementLookup = this.elementLookup.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
   }
    
    toggleModal = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
        console.log(this.state.isOpen);
    }

    showWikiBox = (link) => {
    this.setState({
        isOpen: !this.state.isOpen,
        link: link
    });
    console.log(this.state.link);
    }

    printColumnLabel(i){
        var columnname = 'c' + i;
        return(<div className={columnname}>{i}</div>) ;
    };

    printRowLabel(i){
        var columnname = 'r' + i;
        return(<div className={columnname}>{i}</div>) ;
    };

    elementLookup(term){
        for(var i=0; i < data.elements.length; i++){
            if(data.elements[i].symbol === term){
                this.setState({hoveredElement : data.elements[i]});
                //console.log(data.elements[i]);
            }
        }
    }

    printSingleElement(element){
        if(element.category != 'lanthanide' && element.category != 'actinide'){
            return(  
                this.printElement(element)
            );
        }
      }
    
      printLanthanideSingleElement(element){
        if(element.category === 'lanthanide'){
            return(  
                this.printElement(element)
            );
        }
      }

      printActinideSingleElement(element){
        if(element.category === 'actinide'){
            return(  
                this.printElement(element)
            );
        }
      }

      printElement(element){
        return(  
            <Element
                phase={element.phase}
                category={element.category}                    
                atomic_number={element.number} 
                symbol={element.symbol} 
                atomic_weight={(element.atomic_mass)} 
                element_name={element.name}
                key={element.number}
                onHoverElementChange = {term => this.elementLookup(term)}
                //onClick = {term => this.props.showWikiBox(term)}
                />
        );
      }

      printHoveredElement(element){
        return(  
            <CloseupElement
                phase={element.phase}
                category={element.category}                    
                atomic_number={element.number} 
                symbol={element.symbol} 
                atomic_weight={(element.atomic_mass)} 
                element_name={element.name}
                key={element.number}
                />
        );
      }
    
      
    
     render() {
        var columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        var rows = [1,2,3,4,5,6,7,8];
        const Lanthanides = data.elements.map(element => this.printLanthanideSingleElement(element));
        const Actinides = data.elements.map(element => this.printActinideSingleElement(element));
        const columnList = columns.map(index => this.printColumnLabel(index));
        const rowList = rows.map(index => this.printRowLabel(index));
        const list = data.elements.map(element => this.printSingleElement(element));
        const hoveredElement = this.printHoveredElement(this.state.hoveredElement);
        return ( 
            <div>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    {this.state.link}
                </Modal>
                <div className="Table">
                    <div className="b0"></div>
                    <div className="b1"></div>
                    <div className="b2">
                        {hoveredElement}
                    </div>
                    <div className="b3"><Closeup /></div>
                    <div className="b4"></div>
                    <div className="b5"></div>
                    {columnList}
                    {rowList}
                    {list}
                    {Lanthanides}
                    {Actinides}
                </div>        
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