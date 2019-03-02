import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
class RoomCard extends React.Component {
  renderStars = ratingValue => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < ratingValue) {
        stars.push(<Ionicons key={i} name="md-star" size={32} color="gold" />);
      } else {
        stars.push(<Ionicons key={i} name="md-star" size={32} color="grey" />);
      }
    }
    return stars;
  };
  render() {
    const room = this.props.room;
    return (
      <View style={{ padding: this.props.itemOfList === true ? 20 : 0 }}>
        <ImageBackground
          source={{ uri: room.photos[0] }}
          style={{ width: "100%", height: 250 }}
        >
          <View
            style={{
              backgroundColor: "black",
              width: 100,
              position: "absolute",
              left: 0,
              bottom: 30,
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>{room.price}€</Text>
          </View>
        </ImageBackground>
        <View style={{ flexDirection: "row" }}>
          <Text>{room.title}</Text>
          <Image
            source={{ uri: room.user.account.photos[0] }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 30
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          {this.renderStars(room.ratingValue)}
          <Text>{room.reviews} reviews</Text>
        </View>
        <View />
      </View>
    );
  }
}
export default RoomCard;
