import { renderComponent , expect } from '../test_helper';
import Table from '../../src/components/table';

let component;
  
describe('Table',()=>{
    beforeEach(()=>{
        component = renderComponent(Table);
    });

    describe('dimensions', ()=>{

    });
    

    /*
    it('shows a outlined box to contain the Element',()=>{
        expect(component.find('div.element_box')).to.exist;
    });
    it('shows the atomic number of the Element',()=>{
        expect(component.find('h6.atomic_number')).to.exist;
    });
    it('displays the Symbol of the Element',()=>{
        expect(component.find('div.symbol')).to.exist;
    });
    it('displays the atomic weight of the Element',()=>{
        expect(component.find('div.atomic_weight')).to.exist;
    });
    it('displays the name of the Element',()=>{
        expect(component.find('div.element_name')).to.exist;
    });
    */
});