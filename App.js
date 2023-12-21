import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';


import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  const [screen, setccreen] = useState('login');
  let Screen = <LogInScreen onChangeScreen={ChangeScreen} />

  function ChangeScreen(S) {
    setccreen(S);
  }
  if (screen == 'login') {
    Screen = (<LogInScreen onChangeScreen={ChangeScreen} />);
  }
  if (screen == 'signup') {
    Screen = (<SignUpScreen onChangeScreen={ChangeScreen} />);
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>{Screen}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
