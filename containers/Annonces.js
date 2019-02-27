import React from "react";
import { Text } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  });

  render() {
    return <Text>Yeet</Text>;
  }
}
