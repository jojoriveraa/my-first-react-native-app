import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Me from '../../app/screens/Me.js';

describe('[Screen] Me', () => {
  const contactsRenderer = renderer.create(<Me />);
  const contactsInstance = contactsRenderer.root;

  it('renders correctly', () => {
    expect(contactsRenderer).toMatchSnapshot();
  });

  it('should contain `Me screen`', () => {
    const textComponentValue = contactsInstance.findByType(Text).props.children;
    expect(textComponentValue).toEqual('Me Screen');
  });
});
