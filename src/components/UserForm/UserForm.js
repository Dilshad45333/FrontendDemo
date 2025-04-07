import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { saveData } from '../AsyncStorageComponent/AsyncStorageComponent';

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async() => {
    try {
        saveData({name,email,password});
        console.log('User data saved to AsyncStorage!');
      } catch (error) {
        console.error('Error submitting form:', error);
      }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Form</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        mode="outlined"
        style={styles.input}
      />

     <TextInput
    label="Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={true}  // Hides the password
    mode="outlined"
    style={styles.input}
    />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default UserForm;
