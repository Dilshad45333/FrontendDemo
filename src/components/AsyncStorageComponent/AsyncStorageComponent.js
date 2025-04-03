import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AsyncStorageComponent = ()=>{

    const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  // Function to save data
  const saveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      alert('Name saved successfully!');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  // Function to retrieve data
  const getName = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        setStoredName(value);
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  // Load stored name when the app starts
  useEffect(() => {
    getName();
  }, []);

  return (
    <View style={{ padding: 20 }}>
  <Text>Enter your name:</Text>
  <TextInput
    value={name}
    onChangeText={setName}
    style={{
      borderBottomWidth: 1,
      marginBottom: 10,
      padding: 5,
    }}
  />
  
  {/* Wrap Button inside a View */}
  <View style={{ marginTop: 10 }}>
    <Button title="Save Name" onPress={saveName} />
  </View>

  <Text style={{ marginTop: 20 }}>Stored Name: {storedName}</Text>
</View>

  );
};