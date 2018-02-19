import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/closeup.css';

class Closeup extends Component{
    constructor(props){
        super(props);    
    }
    render(){
        return(
            <div className="Closeup">
                <div className="metals_group">
                    <div className="metals_row_1">
                        <div className="metals">Metals</div>
                    </div>
                    <div className="metals_row_2">
                        <div className="alkali_metals">Alkali Metals</div>
                        <div className="alkaline_earth_metals">Alkaline Earth Metals</div>
                        <div className="bottom_rows">
                            <div className="lanthanoids">Lanthanoids</div>
                            <div className="actinoids">Actinoids</div>
                        </div>
                        <div className="transition_metals">Transition Metals</div>
                        <div className="post-transition_metals">Post-Transition Metals</div>
                    </div>
                </div>
                <div className="metaloids">Metaloids</div>
                <div className="nonmetals_group">
                    <div className="nonmetals_row_1">
                        <div className="nonmetals">Nonmetals</div>
                    </div>
                    <div className="nonmetals_row_2">
                        <div className="other_nonmetals">Other Non-Metals</div>
                        <div className="nobel_gases">Nobel Gases</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { comments: state.comments };
}
export default connect(mapStateToProps)(Closeup);