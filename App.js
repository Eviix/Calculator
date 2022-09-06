import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {

  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');


  const buttonPressedP = () => {
    setResult(parseInt(number1) + parseInt(number2));
  }

  const buttonPressedM = () => {
    setResult(parseInt(number1) - parseInt(number2));
    
  }



  return (
    <View style={styles.container}>
      <Text>Results: {result}</Text>
      <TextInput style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1} />
      <TextInput style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2} />
      <View style={styles.buttons}>
      <Button onPress={buttonPressedP} title="+" />
      <Button onPress={buttonPressedM} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
});
