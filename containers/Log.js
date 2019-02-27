import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "AirBnb"
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Icon style={styles.logo} name="home" size={100} color="white" />
        <Text style={styles.welcome}>Welcome</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigate("Profile", { name: "Annonces" })}
        >
          <Text style={styles.loginbutton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: { marginTop: 30 },
  welcome: {
    color: "white",
    fontSize: 40,
    marginBottom: 40
  },
  container: {
    backgroundColor: "#EE6564",
    flexDirection: "column",

    alignItems: "center",
    height: "100%"
  },
  Button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: "white",
    borderRadius: 30
  },
  loginbutton: {
    fontSize: 30,
    color: "#EE6564"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "70%",
    marginBottom: 30
  }
});
