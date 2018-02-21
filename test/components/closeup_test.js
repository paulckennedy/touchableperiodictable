import { renderComponent , expect } from '../test_helper';
import Closeup from '../../src/components/closeup';

let component;

  
describe('Closeup',()=>{
    beforeEach(()=>{
        component = renderComponent(Closeup);
    });

    describe('Metals',()=>{
        it('has a div for Metals.',()=>{
            expect(component.find('div.metals')).to.exist;
            
        });
        it('has a div for Non-Metals.',()=>{
            expect(component.find('div.nonmetals')).to.exist;
        });
        it('has a div for Alkaline Earth Metals.',()=>{
            expect(component.find('div.alkaline_earth_metals')).to.exist;
            
            describe('hover',()=>{
                it('onmouseover, colors Alkaline Earth Metals and grays out everything else.', () => {
                    component.find('div.alkaline_earth_metals').simulate('mouseEnter');
                    expect(component.find('div.transition_metals')).to.have.style('color', 'gray');
                });
            });
            
        });
        it('has a div for Lanthanoids.',()=>{
            expect(component.find('div.lanthanoids')).to.exist;
        });
        it('has a div for Actinoids.',()=>{
            expect(component.find('div.actinoids')).to.exist;
        });
        it('has a div for Tranisition Metals.',()=>{
            expect(component.find('div.transition_metals')).to.exist;
        });
        it('has a div for Post-Transition Metals.',()=>{
            expect(component.find('div.post-transition_metals')).to.exist;
        });
    });
    it('has a div for Metaloids.',()=>{
        expect(component.find('div.metaloids')).to.exist;
    });
    describe('Non-Metals',()=>{
        it('has a div for Other Non-Metals.',()=>{
            expect(component.find('div.other_nonmetals')).to.exist;
        });
        it('has a div for Nobel Gases.',()=>{
            expect(component.find('div.nobel_gases')).to.exist;
        });
    });
});
