import { renderComponent , expect } from '../test_helper';
import CloseupElement from '../../src/components/closeup_element';
//import Element from '../../src/component/element';

describe('CloseupElement' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CloseupElement);
  });

    it('shows a outlined box to contain the CloseupElement',()=>{
        expect(component.find('div.closeup_element_box')).to.exist;
    });
    it('shows the atomic number of the CloseupElement',()=>{
        expect(component.find('h6.atomic_number')).to.exist;
    });
    it('displays the Symbol of the CloseupElement',()=>{
        expect(component.find('div.symbol')).to.exist;
    });
    it('displays the atomic weight of the CloseupElement',()=>{
        expect(component.find('div.atomic_weight')).to.exist;
    });
    it('displays the name of the CloseupElement',()=>{
        expect(component.find('div.element_name')).to.exist;
    });
});