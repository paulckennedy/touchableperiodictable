import { renderComponent , expect } from '../test_helper';
import Orbitals from '../../src/components/orbitals';

let component;
  
describe('Orbitals',()=>{
    beforeEach(()=>{
        component = renderComponent(Orbitals);
    });

    
    it('shows an outlined box containing S',()=>{
        expect(component.find('div.s_orbital')).to.exist;
        describe('each orbital box', ()=>{
            it('shows a box for 1s', ()=>{
                expect(component.find('div.box_1s')).to.exist;
            });
            it('shows a box for 2s', ()=>{
                expect(component.find('div.box_2s')).to.exist;
            });
            it('shows a box for 3s', ()=>{
                expect(component.find('div.box_3s')).to.exist;
            });
            it('shows a box for 4s', ()=>{
                expect(component.find('div.box_4s')).to.exist;
            });
            it('shows a box for 5s', ()=>{
                expect(component.find('div.box_5s')).to.exist;
            });
            it('shows a box for 6s', ()=>{
                expect(component.find('div.box_6s')).to.exist;
            });
            it('shows a box for 7s', ()=>{
                expect(component.find('div.box_7s')).to.exist;
            });
        })
    });
    it('shows an outlined box containing P',()=>{
        expect(component.find('div.s_orbital')).to.exist;
        describe('each orbital box', ()=>{
            it('shows a box for 2p', ()=>{
                expect(component.find('div.box_2p')).to.exist;
            });
            it('shows a box for 3p', ()=>{
                expect(component.find('div.box_3p')).to.exist;
            });
            it('shows a box for 4p', ()=>{
                expect(component.find('div.box_4p')).to.exist;
            });
            it('shows a box for 5p', ()=>{
                expect(component.find('div.box_5p')).to.exist;
            });
            it('shows a box for 6p', ()=>{
                expect(component.find('div.box_6p')).to.exist;
            });
        })
    });
    it('shows an outlined box containing D',()=>{
        expect(component.find('div.s_orbital')).to.exist;
        describe('each orbital box', ()=>{
            it('shows a box for 3d', ()=>{
                expect(component.find('div.box_3d')).to.exist;
            });
            it('shows a box for 4d', ()=>{
                expect(component.find('div.box_4d')).to.exist;
            });
            it('shows a box for 5d', ()=>{
                expect(component.find('div.box_5d')).to.exist;
            });
            it('shows a box for 6d', ()=>{
                expect(component.find('div.box_6d')).to.exist;
            });
        })
    });
    it('shows an outlined box containing F',()=>{
        expect(component.find('div.s_orbital')).to.exist;
        describe('each orbital box', ()=>{
            it('shows a box for 4f', ()=>{
                expect(component.find('div.box_4f')).to.exist;
            });
            it('shows a box for 5f', ()=>{
                expect(component.find('div.box_5f')).to.exist;
            });
        })
    });

    
});