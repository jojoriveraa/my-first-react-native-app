import React from 'react';
import {Text, FlatList} from 'react-native';
import renderer from 'react-test-renderer';
import Contacts from '../../app/screens/Contacts.js';
import * as mocks from '../../app/config/__mocks__/data';

describe('[Screen] Contacts', () => {
  const contactsRenderer = renderer.create(<Contacts />);
  const contactsInstance = contactsRenderer.root;

  it('should render correctly', () => {
    expect(contactsRenderer).toMatchSnapshot();
  });

  it('should contain `Contacts screen`', () => {
    const textComponentValue = contactsInstance.findByType(Text).props.children;
    expect(textComponentValue).toEqual('Contacts Screen');
  });

  describe('contains a <FlatList>', () => {
    it('should render correctly', () => {
      const flatListComponent = contactsInstance.findByType(FlatList);
      expect(flatListComponent).not.toBeNull();
    });
  });
});
