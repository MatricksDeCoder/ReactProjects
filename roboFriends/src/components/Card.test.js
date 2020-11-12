import React from 'react';
import { shallow } from 'enzyme';
//import sinon from 'sinon';
//import { expect } from 'chai';
import Card from './Card';

const wrapper = shallow(<Card />);

it('expect to render Card Component',() => {
    expect(wrapper.length).toEqual(1);
})



