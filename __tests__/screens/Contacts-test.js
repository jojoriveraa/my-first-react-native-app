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

  it('should render a <FlatList> correctly', () => {
    const flatListComponent = contactsInstance.findByType(FlatList);
    expect(flatListComponent).not.toBeNull();
  });

  describe('<FlatList> is mounted', () => {
    const spyDidMount = jest.spyOn(Contacts.prototype, 'componentDidMount');
    const spyLoadData = jest.spyOn(Contacts.prototype, 'loadData');


    afterEach(() => {
      spyLoadData.mockRestore();
      spyDidMount.mockRestore();
    });

    it('should invoke `componentDidMount`', () => {
      renderer.create(<Contacts />);
      expect(spyDidMount).toHaveBeenCalled();
    });

    it('should invoke `loadData`', () => {
      renderer.create(<Contacts />);
      expect(spyLoadData).toHaveBeenCalled();
    });
  });
});
