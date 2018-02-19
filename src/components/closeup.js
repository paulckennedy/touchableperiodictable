import React, { Component } from 'react';
import { connect } from 'react-redux';

class Closeup extends Component{
    constructor(props){
        super(props);    
    }
    render(){
        return(
            <div className="Closeup">
                <div className="metals">>Metals</div>
                <div className="nonmetals">>Non-Metals</div>
                <div className="alkali_metals">>Metals</div>
                <div className="alkaline_earth_metals">>Metals</div>
                <div className="lanthanoids">>Metals</div>
                <div className="actinoids">>Metals</div>
                <div className="transition_metals">>Metals</div>
                <div className="post-transition_metals">>Metals</div>
                <div className="metaloids">>Metals</div>
                <div className="other_non-metals">>Metals</div>
                <div className="nobel_gases">>Metals</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { comments: state.comments };
}
export default connect(mapStateToProps)(Closeup);