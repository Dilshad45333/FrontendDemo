import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { UserContext } from "../UserContext/UserContext";

const UserContextScreen = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Name: {user.name}</Text>
      <Text style={{ fontSize: 20 }}>Age: {user.age}</Text>
      
      <Button
        title="Update Age"
        onPress={() => setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }))}
      />
    </View>
  );
};

export default UserContextScreen;
