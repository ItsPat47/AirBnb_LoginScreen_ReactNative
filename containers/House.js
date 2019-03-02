import React from "react";
import { MapView } from "expo";
import axios from "axios";
import { Text, View, ActivityIndicator, ScrollView } from "react-native";
import RoomCard from "../components/RoomCard";

class House extends React.Component {
  state = {
    room: {},
    isLoading: true
  };
  render() {
    if (this.state.isLoading === true) {
      return <ActivityIndicator />;
    } else {
      return (
        <ScrollView style={{ flex: 1 }}>
          <RoomCard room={this.state.room} />

          <MapView
            style={{ height: 200 }}
            initialRegion={{
              latitude: this.state.room.loc[1],
              longitude: this.state.room.loc[0],
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.room.loc[1],
                longitude: this.state.room.loc[0]
              }}
            />
          </MapView>
        </ScrollView>
      );
    }
  }
  async componentDidMount() {
    const response = await axios.get(
      `https://airbnb-api.now.sh/api/room/${
        this.props.navigation.state.params.id
      }`
    );
    console.log(response.data);
    this.setState({ room: response.data, isLoading: false });
  }
}

export default House;

//faire une component didmount
// recupérer l'id depuis Annonces (this.props.navigation.state.params.id)
//recupérer donnée et mettre dans un state : room, isLoading
