import React from 'react';

import {View} from 'react-native';

import {TextInput} from '../../common/inputs';
import {RoundedButton} from '../../common/buttons';

const RegisterScreen = ({navigation}) => {
  const registrar = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput onChangeText={(text) => console.log(text)} label="Nombre" />
        <TextInput
          onChangeText={(text) => console.log(text)}
          label="Apellido"
        />
        <TextInput onChangeText={(text) => console.log(text)} label="Email" />
        <TextInput
          secureTextEntry
          onChangeText={(text) => console.log(text)}
          label="Password"
        />
        <RoundedButton label="REGISTRARME" />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

export default RegisterScreen;
