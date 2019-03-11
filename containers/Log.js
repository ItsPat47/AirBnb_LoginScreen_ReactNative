import React from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/Entypo";

import {
  AsyncStorage,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class MainScreen extends React.Component {
  state = {
    email: "arno@airbnb-api.com",
    password: "",
    token: ""
  };
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  storage = async () => {
    await AsyncStorage.setItem("token", this.state.token);
  };
  onSubmit = () => {
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response.data && response.data.token) {
          this.setState({ token: response.data.token });
          this.onLogin();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  onLogin = async () => {
    const { navigate } = this.props.navigation;
    await this.storage();
    navigate("Profile", { name: "Annonces" });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Icon style={styles.logo} name="home" size={100} color="white" />
        <Text style={styles.welcome}>Welcome</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize={"none"}
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          type="text"
          placeholder="Email"
        />
        <TextInput
          autoCorrect={false}
          autoCapitalize={"none"}
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => this.onSubmit()}
          // onPress={() => navigate("Profile", { name: "Annonces" })}
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
    paddingTop: "40%",
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
    borderBottomWidth: 1, //ou StyleSheet.hairlineWidth
    borderBottomColor: "white",
    width: "70%",
    marginBottom: 30
  }
});
