import React from 'react';
import { mount } from 'enzyme';
import Home from './index';

describe('Home', () => {
  it('should render an H1', () => {
    const component = mount(<Home />)

    expect(component.find('h1').length).toEqual(1)
  })
});
