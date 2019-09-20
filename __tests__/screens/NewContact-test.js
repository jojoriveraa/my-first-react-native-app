import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import NewContact from '../../app/screens/NewContact';

describe('[Screen] New Contact', () => {
  const newContactRenderer = renderer.create(<NewContact />);
  const newContactInstance = newContactRenderer.root;

  it('renders correctly', () => {
    expect(newContactRenderer).toMatchSnapshot();
  });

  it('should contain `New Contact screen`', () => {
    const textComponentValue = newContactInstance.findByType(Text).props.children;
    expect(textComponentValue).toEqual('New Contact Screen');
  });
});
