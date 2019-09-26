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

  it('should contain `Contacts screen` title', () => {
    const textComponentValue = contactsInstance.findAllByType(Text)[0].props
      .children;
    expect(textComponentValue).toEqual('Contacts Screen');
  });
  it('should contain a list of contacts', () => {
    const flatListComponent = contactsInstance.findByType(FlatList);
    expect(flatListComponent).not.toBeNull();
  });

  describe('when the list of contacts is initialized', () => {
    let contactsRenderer;
    let instance;
    let contactsList;

    let spyDidMount = jest.spyOn(Contacts.prototype, 'componentDidMount');
    let spyLoadData = jest
      .spyOn(Contacts.prototype, 'loadData')
      .mockImplementation(() => mocks.contacts);

    beforeEach(() => {
      contactsRenderer = renderer.create(<Contacts />);
      instance = contactsRenderer.root;
      contactsList = instance.findByType(FlatList);
    });

    afterEach(() => {
      spyDidMount.mockClear();
      spyLoadData.mockClear();
    });

    it('should invoke `componentDidMount`', () => {
      expect(spyDidMount).toHaveBeenCalled();
    });

    it('should invoke `loadData`', () => {
      expect(spyLoadData).toHaveBeenCalled();
    });

    describe('and contacts list is shown', () => {
      let contactsEmails;

      beforeEach(() => {
        contactsEmails = contactsList.findAllByType(Text);
      });

      it('should display all the items', () => {
        expect(contactsEmails.length).toEqual(mocks.contacts.length);
      });

      it('should display contacts` email', () => {
        const expectedEmails = mocks.contacts.map(item => item.email);
        const actualEmails = contactsEmails.map(item => item.props.children);
        expect(actualEmails).toEqual(expect.arrayContaining(expectedEmails));
      });
    });
  });
});
