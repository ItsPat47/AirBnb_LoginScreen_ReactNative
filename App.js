import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./containers/Log";
import ProfileScreen from "./containers/Annonces";

const App = createStackNavigator({
  Main: MainScreen,
  Profile: ProfileScreen
});

export default createAppContainer(App);
