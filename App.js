import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./containers/Log";
import Annonces from "./containers/Annonces";
import House from "./containers/House";
const App = createStackNavigator({
  Main: MainScreen,
  Profile: Annonces,
  Particulier: House
});

export default createAppContainer(App);
