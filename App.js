import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./containers/Log";
import Annonces from "./containers/Annonces";
import House from "./containers/House";
const App = createStackNavigator({
  Profile: Annonces,
  Main: MainScreen,
  Particulier: House
});

export default createAppContainer(App);
