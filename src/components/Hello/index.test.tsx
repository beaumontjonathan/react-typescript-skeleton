import { shallow } from 'enzyme';
import * as React from 'react';
import { Hello } from './index';

describe('(component) Hello', () => {
  it('should render without crashing', () => {
    const helloComponent = shallow(<Hello framework="react" compiler="webpack" />);

    expect(helloComponent.type()).toBe('h1');
  });

  it('should be styled correctly', () => {
    const helloComponent = shallow(<Hello framework="react" compiler="webpack" />);

    expect(helloComponent).toMatchSnapshot();
  });

  it('should take and apply a framework prop', () => {
    const helloComponent = shallow(<Hello framework="react" compiler="webpack" />);

    expect(helloComponent.text().includes('react')).toBeTruthy();
  });

  it('should take and apply a compiler prop', () => {
    const helloComponent = shallow(<Hello framework="react" compiler="webpack" />);

    expect(helloComponent.text().includes('webpack')).toBeTruthy();
  });
});
