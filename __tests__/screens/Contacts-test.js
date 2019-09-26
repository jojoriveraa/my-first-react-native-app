import React from 'react';
import {Text, FlatList} from 'react-native';
import renderer from 'react-test-renderer';
import Contacts from '../../app/screens/Contacts';
import * as mocks from '../../app/config/__mocks__/data';

describe('[Screen] Contacts', () => {
  const contactsRenderer = renderer.create(<Contacts />);
  const contactsInstance = contactsRenderer.root;

  it('should render correctly', () => {
    expect(contactsRenderer).toMatchSnapshot();
  });

  it('should contain `Contacts screen`', () => {
    const textComponentValue = contactsInstance.findAllByType(Text)[0].props
      .children;
    expect(textComponentValue).toEqual('Contacts Screen');
  });

  describe('the contained <FlatList>', () => {
    it('should render correctly', () => {
      const flatListComponent = contactsInstance.findByType(FlatList);
      expect(flatListComponent).not.toBeNull();
    });

    describe('when mounted', () => {
      const spyDidMount = jest.spyOn(Contacts.prototype, 'componentDidMount');
      const spyLoadData = jest.spyOn(Contacts.prototype, 'loadData');

      beforeEach(() => {
        renderer.create(<Contacts />);
      });

      it('should invoke `componentDidMount`', () => {
        expect(spyDidMount).toHaveBeenCalled();
        spyDidMount.mockRestore();
      });

      it('should invoke `loadData`', () => {
        expect(spyLoadData).toHaveBeenCalled();
        spyLoadData.mockRestore();
      });
    });

    it('should display contact`s email', () => {
      const spy = jest
        .spyOn(Contacts.prototype, 'loadData')
        .mockImplementation(() => mocks.contacts);
      const mockRenderer = renderer.create(<Contacts />);
      const mockInstance = mockRenderer.root;
      const flatListComponent = mockInstance.findByType(FlatList);
      const contactEmail = flatListComponent.findByType(Text);
      expect(flatListComponent).not.toBeNull();
      expect(contactEmail).not.toBeNull();
      expect(contactEmail.props.children).toEqual('marina.hauser@example.com')
      spy.mockRestore();
    });
  });
});
