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

  describe('Component: Text', () => {
    const textComponentValue = contactsInstance.findByType(Text).props.children;
    it('should contain `Contacts screen`', () => {
      expect(textComponentValue).toEqual('Contacts Screen');
    });
  });
});
