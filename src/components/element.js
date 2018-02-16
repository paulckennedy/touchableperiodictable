import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import '../../style/element.css';

class Element extends Component{
    constructor(props){
        super(props);    
    }
    render(){
        return(
            <div 
                className={'Element El' + this.props.atomic_number}
            >
                <div className="element_box">
                    <h6 className="atomic_number">{this.props.atomic_number}</h6>
                    <div className="symbol">{this.props.symbol}</div>
                    <div className="atomic_weight">{this.props.atomic_weight}</div>
                    <div className="element_name">{this.props.element_name}</div>
                </div>
            </div>
        )
    }
}

Element.propTypes = {
    atomic_number: PropTypes.number,
    symbol: PropTypes.string,
    atomic_weight: PropTypes.number,
    element_name: PropTypes.string
}

export default Element;
