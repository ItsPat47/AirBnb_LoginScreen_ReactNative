import React from "react";
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import RoomCard from "../components/RoomCard";

export default class Annonces extends React.Component {
  state = {
    rooms: [],
    isLoading: true
  };
  static navigationOptions = ({ navigation }) => ({
    title: "AirBnb",
    headerTitleStyle: { color: "white" },
    headerLeft: null,
    headerStyle: { backgroundColor: "#EE6564" }
  });
  componentDidMount = async () => {
    const response = await axios.get(
      "https://airbnb-api.now.sh/api/room?city=paris"
    );
    this.setState({ rooms: response.data.rooms, isLoading: false });
  };

  recup = async () => {
    const user = await AsyncStorage.getItem("token");
    // RECUPERATION DU TOKEN
  };

  render() {
    this.recup();
    if (this.state.isLoading === true) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <FlatList
        data={this.state.rooms}
        keyExtractor={item => {
          return String(item._id);
        }}
        renderItem={obj => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Particulier", {
                  id: obj.item._id //transmet l'id a la page de chaque élements
                });
              }}
            >
              <RoomCard room={obj.item} itemOfList={true} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

//notes
