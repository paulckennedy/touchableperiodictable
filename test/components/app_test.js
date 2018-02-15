import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
//import Element from '../../src/component/element';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders Element', () => {
    //expect(component).to.exist;
    expect(component.find('.Element')).to.exist;
  });
});
