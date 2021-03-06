import React, { Component } from 'react';
import Element from './element';
import CloseupElement from './closeup_element';
import Orbitals from './orbitals';
import data from '../PeriodicTableJSON.json';
import PropTypes from 'prop-types';
import Closeup from './closeup';
import Modal from 'react-modal';

import '../../style/table.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            hoveredElement: {},
            modalIsOpen: false
        };

        this.elementLookup = this.elementLookup.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

   
    openModal() {
        this.setState({modalIsOpen: true});
        console.log(this.state.hoveredElement.source);
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    
    
    printColumnLabel(i){
        var columnname = 'c' + i + ' GroupAndColumn';
        return(<div className={columnname}>{i}</div>) ;
    };

    printRowLabel(i){
        var columnname = 'r' + i + ' GroupAndColumn';
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
                onClick = {this.openModal}
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
      printHoveredOrbitals(element){
        return(  
            <Orbitals
                atomic_number={element.number} 
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
        const hoveredOrbitals = this.printHoveredOrbitals(this.state.hoveredElement);
        return ( 
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel={this.state.hoveredElement.name}
                    >
                    <button onClick={this.closeModal}>X</button>
                    <iframe 
                        src={this.state.hoveredElement.source} 
                        title={this.state.hoveredElement.name} 
                        width="1000" 
                        height="500"></iframe>
                    
                  </Modal>
                <div className="Table">
                    <div className="b0"></div>
                    <div className="b1"></div>
                    <div className="b2">
                        {hoveredElement}
                    </div>
                    <div className="b3">{hoveredOrbitals}</div>
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