import React from 'react';

import {Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <Button title="Register" onPress={() => navigation.navigate('Register')} />
  );
};

export default HomeScreen;
