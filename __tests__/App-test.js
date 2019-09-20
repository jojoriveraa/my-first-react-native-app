/**
 * @format
 */

import React from 'react';
import 'react-native';
import {Text} from 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  const appRenderer = renderer.create(<App />);
  const appInstance = appRenderer.root;
  it('renders correctly', () => {
    expect(appRenderer).toMatchSnapshot();
  });

  describe('Landing page', () => {
    const textComponents = appInstance.findAllByType(Text);
    const textComponentsValues = textComponents.map(t => t.props.children)
    it('should contain `Welcome to React` message', () => {
      expect(textComponentsValues).toContain('Welcome to React');
    });
  });
});
