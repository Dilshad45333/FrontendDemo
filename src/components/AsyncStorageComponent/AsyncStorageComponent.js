import React, {  useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Function to save data
export const saveData = async (data) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data', error);
  }
};

// Function to retrieve data
export const FetchData = async () => {
  try {
    const value = await AsyncStorage.getItem('userData');
    console.log('fetching data', value);
    return value != null ? JSON.parse(value) : null;

  } catch (error) {
    console.error('Error retrieving data', error);
  }
};


// function to delete user data
export const deleteData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
    console.log('Data deleted');
    } catch (error) {
      console.error('Error deleting data', error);
      }

}


