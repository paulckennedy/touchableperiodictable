import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';

import '../../style/closeup_element.css';

class CloseupElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            atomic_number: this.props.atomic_number,
            symbol: this.props.symbol,
            element_name: this.props.element_name,
            atomic_weight: this.props.atomic_weight,
            category: this.props.category
        }
    }
    render(){
        return(
            <div 
                className={'CloseupElement El' 
                    + this.props.atomic_number 
                    + ' ' + this.props.phase }
            >
                <div className={'closeup_element_box ' + this.state.category}>
                    <h6 className="atomic_number">{this.state.atomic_number}</h6>
                    <div className="symbol">{this.state.symbol}</div>
                    <div className="element_name">{this.state.element_name}</div>
                    <div className="atomic_weight">{this.state.atomic_weight}</div>
                </div>
            </div>
        )
    }
}

CloseupElement.propTypes = {
    phase: PropTypes.string,
    category: PropTypes.string,
    atomic_number: PropTypes.number,
    symbol: PropTypes.string,
    atomic_weight: PropTypes.number,
    element_name: PropTypes.string
}

export default CloseupElement;