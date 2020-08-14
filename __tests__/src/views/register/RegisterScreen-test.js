import 'react-native';
import React from 'react';
import RegisterScreen from '../../../../src/views/Register/Register';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<RegisterScreen />);
});

it('tiene el botos "REGISTRARME"', () => {
  const tree = renderer.create(<RegisterScreen />);
  expect(tree).toMatchSnapshot();
});
