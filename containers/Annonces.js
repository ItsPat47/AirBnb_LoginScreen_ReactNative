import React from "react";
import { Text, AsyncStorage } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  });

  recup = async () => {
    const user = await AsyncStorage.getItem("token");
    console.log("userToken", user);
  };

  render() {
    this.recup();
    return <Text>Yeet</Text>;
  }
}
