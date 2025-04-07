import React from 'react';
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteData } from '../AsyncStorageComponent/AsyncStorageComponent';

const Home = ()=>{
   const handleDelete=()=>{
     deleteData();
    console.log('Delete button clicked');

   }

    return(
        <View>
            <Text>Home Screen</Text>
             <TouchableOpacity style={styles.button} onPress={handleDelete}>
             <Icon name="trash" size={20} color="white" />
             <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
        </View>


        );
};

export default Home;

const styles=StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        marginLeft: 8,
        fontWeight: 'bold',
      },
});