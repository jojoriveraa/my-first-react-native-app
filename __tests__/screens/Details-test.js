import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Details from '../../app/screens/Details.js';

describe('[Screen] Details', () => {
  const detailsRenderer = renderer.create(<Details />);
  const detailsInstance = detailsRenderer.root;

  it('renders correctly', () => {
    expect(detailsRenderer).toMatchSnapshot();
  });

  it('should contain `Details screen`', () => {
    const textComponentValue = detailsInstance.findByType(Text).props.children;
    expect(textComponentValue).toEqual('Details Screen');
  });
});
