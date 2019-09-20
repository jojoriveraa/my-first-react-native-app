import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Contacts from '../../app/screens/Contacts.js';

describe('[Screen] Contacts', () => {
  const contactsRenderer = renderer.create(<Contacts />);
  const contactsInstance = contactsRenderer.root;

  it('renders correctly', () => {
    expect(contactsRenderer).toMatchSnapshot();
  });

  it('should contain `Contacts screen`', () => {
    const textComponentValue = contactsInstance.findByType(Text).props.children;
    expect(textComponentValue).toEqual('Contacts Screen');
  });
});
