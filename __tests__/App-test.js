import React from 'react';
import 'react-native';
import App from '../app/index';
import Contacts from "../app/screens/Contacts";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  const appRenderer = renderer.create(<App />);
  const appInstance = appRenderer.root;
  it('renders correctly', () => {
    expect(appRenderer).toMatchSnapshot();
  });

  it('should contains <Contacts>', () => {
    const contactsComponent = appInstance.findByType(Contacts);
    expect(contactsComponent).not.toBeNull();
  });
});
