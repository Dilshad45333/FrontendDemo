import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';


const Message=()=>{

    const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://192.168.1.3:8000/data')  // Replace with your backend URL
      .then(response => {
        console.log(response)
        setMessage(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(message);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FastAPI Response:</Text>
      <Text style={styles.data}>{message || "Loading..."}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    data: {
      fontSize: 16,
      color: 'blue',
    },
  });

export default Message;
