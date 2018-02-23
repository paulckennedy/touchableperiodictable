import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/orbitals.css';

class Orbitals extends Component{
    constructor(props){
        super(props);
        this.state = {
            electrons: this.props.atomic_number
        };
    }
    printOrbitalNotationAdd(orbital, electrons){
        var out = orbital + '<sup>' + electrons + '</sup>';
        return out;
    }
    printArrow_Empty(){
        return(<span>  </span>);
    }

    printArrow_Up(){
        return(<span>↑ </span>);
    }

    printArrow_UpDown(){
        return(<span>↑↓</span>);
    }

    fill_s_shell(electrons){
        var out = [];
        switch(electrons){
            case 0:
                out.push(this.printArrow_Empty());
                break;
            case 1:
                out.push(this.printArrow_Up());
                break;
            case 2:
                out.push(this.printArrow_UpDown());
                break;
            default:
                break;
        }
        return(out);
    }
    fill_p_shell(electrons){
        var out = [];
        switch(electrons){
            case 0:
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 1:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 2:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                break;
            case 3:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 4:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 5:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                break;
            case 6:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                break;
            default:
                break;
        }
        return(out);
    }
    fill_d_shell(electrons){
        var out = [];
        switch(electrons){
            case 0:
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 1:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 2:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 3:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 4:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                break;
            case 5:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 6:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 7:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 8:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 9:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                break;
            case 10:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                break;
            default:
                break;
        }
        return(out);
    }
    fill_f_shell(electrons){
        var out = [];
        switch(electrons){
            case 0:
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 1:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 2:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 3:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 4:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 5:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                out.push(this.printArrow_Empty());
                break;
            case 6:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Empty());
                break;
            case 7:
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 8:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 9:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 10:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 11:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 12:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                out.push(this.printArrow_Up());
                break;
            case 13:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_Up());
                break;
            case 14:
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                out.push(this.printArrow_UpDown());
                break;
            default:
                break;
        }
        return out;
    }

    previousNobelGas(electrons){
        var nobelGases = [
            {sym: '',   el: 0},
            {sym: 'He', el: 2},
            {sym: 'Ne', el: 10},
            {sym: 'Ar', el: 18},
            {sym: 'Kr', el: 36},
            {sym: 'Xe', el: 54},
            {sym: 'Rn', el: 86},
            {sym: 'Og', el: 118}
        ];

        for(var i=0; i<nobelGases.length; i++){
            if(electrons <= nobelGases[i].el){
                return nobelGases[i-1];
            }
        }
    }

    fill_orbitals(){
        var returnObject = {
            sLabels: [],
            pLabels: [],
            dLabels: [],
            fLabels: [],
            sOrbitals: [],
            pOrbitals: [],
            dOrbitals: [],
            fOrbitals: [],
            orbitalNotation: '',
            abbrOrbitalNotation: ''
        };
        
        
        var electrons = this.props.atomic_number;
        var boolAbbrON = false;
        const previousNobelGasObj = this.previousNobelGas(this.props.atomic_number);
        if (typeof this.props.atomic_number != 'undefined'){
            if(previousNobelGasObj.el != 0){
                var abbrOrbitalNotation = '[' + previousNobelGasObj.sym + ']';
            }
        }
        var pattern = ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s', '5f', '6d', '7p', '8s'];
        var orbitalNotation = '';
        for(var i=0; i < pattern.length; i++){
            var index = pattern[i][0];
            var orbital = pattern[i][1];
            switch(orbital){
                case 's':
                    var el = electrons;
                    if(electrons > 2){
                        el = 2;
                    } 
                    electrons -= el;
                    if(el > 0){
                        orbitalNotation = orbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                        if(boolAbbrON){
                            abbrOrbitalNotation = abbrOrbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                            console.log(this.props.atomic_number + ' - ' + electrons + ' - ' + previousNobelGasObj.el +  ' - ' + abbrOrbitalNotation);
                        }
                        if(electrons <= (this.props.atomic_number - previousNobelGasObj.el)){
                            boolAbbrON = true;
                         }
                    }
                    returnObject.dOrbitals.push(this.printOrbitals(index, orbital, el));
                    returnObject.sLabels.push(this.printLabels(index, orbital));
                    break;
                case 'p':
                    var el = electrons;
                    if(electrons > 6){
                        el = 6;
                    }
                    electrons -= el;
                    if(el > 0){
                        orbitalNotation = orbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                         if(boolAbbrON){
                             abbrOrbitalNotation = abbrOrbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                             console.log(this.props.atomic_number + ' - ' + electrons+ ' - ' + previousNobelGasObj.el + ' - ' + abbrOrbitalNotation);
                            }
                         if(electrons <= (this.props.atomic_number - previousNobelGasObj.el)){
                            boolAbbrON = true;
                         }
                    }
                    returnObject.dOrbitals.push(this.printOrbitals(index, orbital, el));
                    returnObject.pLabels.push(this.printLabels(index, orbital));
                    break;
                case 'd':
                    var el = electrons;
                    if(electrons > 10){
                        el = 10;
                    }
                    electrons -= el;
                    if(el > 0){
                        orbitalNotation = orbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                        
                         if(boolAbbrON){
                            console.log(this.props.atomic_number + ' - ' + electrons + ' - ' + previousNobelGasObj.el +  ' - ' + abbrOrbitalNotation);
                             abbrOrbitalNotation = abbrOrbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                            }
                        if(electrons <= (this.props.atomic_number - previousNobelGasObj.el)){
                            boolAbbrON = true;
                         }
                    }
                    returnObject.dOrbitals.push(this.printOrbitals(index, orbital, el));
                    returnObject.dLabels.push(this.printLabels(index, orbital));
                    break;
                case 'f':
                    var el = electrons;
                    if(electrons > 14){
                        el = 14;
                    }
                    electrons -= el;
                    if(el > 0){
                        orbitalNotation = orbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                        if(boolAbbrON){
                             abbrOrbitalNotation = abbrOrbitalNotation.concat(this.printOrbitalNotationAdd(pattern[i], el));
                             console.log(this.props.atomic_number + ' - ' + electrons + ' - ' + previousNobelGasObj.el +  ' - ' + abbrOrbitalNotation);
                            }
                        if(electrons <= (this.props.atomic_number - previousNobelGasObj.el)){
                            boolAbbrON = true;
                        }
                         
                    }
                    returnObject.dOrbitals.push(this.printOrbitals(index, orbital, el));
                    returnObject.fLabels.push(this.printLabels(index, orbital));
                    break;
                default:
                    break;
            }
        }
        returnObject.orbitalNotation = orbitalNotation;
        returnObject.abbrOrbitalNotation = abbrOrbitalNotation;
        return returnObject;
    }
    
    printOrbitals(i, orbital, electrons){
        var orbitalname = 'box box_' + i + orbital;
        var labelname = 'label_' + i + orbital;
        var arrow_out;
        switch(orbital){
            case 's':
                arrow_out = this.fill_s_shell(electrons);
                break;
            case 'p':
                arrow_out = this.fill_p_shell(electrons);
                break;
            case 'd':
                arrow_out = this.fill_d_shell(electrons);
                break;
            case 'f':
                arrow_out = this.fill_f_shell(electrons);
                break;
            default:
                arrow_out = '';
                break;
        }
        const box_name = i + orbital;
        return(<div className={orbitalname}>{arrow_out}</div>)
    }

    printLabels(i, orbital){
        var labelname = 'label_' + i + orbital;
        var label = i + orbital;
        return(<div className={labelname}>{label}</div>)
    }
    
    render(){
        const obj = this.fill_orbitals();
        return(
            <div className="orbital_wrapper">
                <div className="orbitals">
                    {obj.sLabels}
                    {obj.pLabels}
                    {obj.dLabels}
                    {obj.fLabels}
                    {obj.sOrbitals}
                    {obj.pOrbitals}
                    {obj.dOrbitals}
                    {obj.fOrbitals}
                </div>
                <div className="orbital_notation"
                 dangerouslySetInnerHTML={{__html: obj.orbitalNotation}} >
                 </div>
                 <div className="orbital_notation"
                 dangerouslySetInnerHTML={{__html: obj.abbrOrbitalNotation}} >
                 </div>
            </div>
        )
    }
}

Orbitals.propTypes = {
    atomic_number: PropTypes.number,
}

export default Orbitals;