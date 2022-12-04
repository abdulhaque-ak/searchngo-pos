
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './src/screens/GetStarted';
import SendOTP from './src/screens/Login';
import VerifyOTP from './src/screens/VerifyOTP';
import HomePage from './src/screens/HomePage';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FoodHomePage from './src/screens/food/HomePage'
import FoodCategories from './src/screens/food/Categories'
import FoodUserProfile from './src/screens/food/Account'
import FoodCart from './src/screens/food/Cart'
import FoodOrders from './src/screens/food/MyOrders'
import WaterHomePage from './src/screens/water/HomePage'
import WaterNotifications from './src/screens/water/Notifications'
import CategoryDetail1 from './src/screens/food/CategoryDetail1';
import CategoryDetail2 from './src/screens/food/CategoryDetail2';
import DetailPage from './src/screens/food/DetailPage';
import UserDetails from './src/screens/UserDetails';
import Profile from './src/screens/Profile';
import Scan from './src/screens/Scan';
import UserId from './src/screens/options/UserId';
import Mobile from './src/screens/options/Mobile';
import Services from './src/screens/Services';
import WalletMain from './src/screens/services/WalletMain';
import Recharge from './src/screens/services/Recharge';
import Refund from './src/screens/services/Refund';
import Transfer from './src/screens/services/Transfer';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import UserInfo from './src/screens/UserInfo';

const store = createStore(reducer)

const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();

export default function App() {

  const FoodScreens = () => {
    return (
      <Stack1.Navigator screenOptions={{ headerShown: false }}>
        <Stack1.Screen name='FoodHomePage' component={FoodHomePage} />
        <Stack1.Screen name='FoodCategories' component={FoodCategories} />
        <Stack1.Screen name='FoodUserProfile' component={FoodUserProfile} />
        <Stack1.Screen name='FoodCart' component={FoodCart} />
        <Stack1.Screen name='FoodOrders' component={FoodOrders} />
        <Stack1.Screen name='CategoryDetail1' component={CategoryDetail1} />
        <Stack1.Screen name='CategoryDetail2' component={CategoryDetail2} />
        <Stack1.Screen name='DetailPage' component={DetailPage} />
      </Stack1.Navigator>

    )
  }

  const WaterScreens = () => {
    return (
      <Stack2.Navigator screenOptions={{ headerShown: false }}>
        <Stack2.Screen name='WaterHomePage' component={WaterHomePage} />
        <Stack2.Screen name='WaterNotifications' component={WaterNotifications} />
      </Stack2.Navigator>

    )
  }


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='GetStarted' component={GetStarted} />
          {/* <Stack.Screen name='UserInfo' component={UserInfo} /> */}
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='UserDetails' component={UserDetails} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='FoodScreens' component={FoodScreens} />
          <Stack.Screen name='WaterScreens' component={WaterScreens} />
          <Stack.Screen name='Scan' component={Scan} />
          <Stack.Screen name='UserId' component={UserId} />
          <Stack.Screen name='Mobile' component={Mobile} />
          <Stack.Screen name='Services' component={Services} />
          <Stack.Screen name='WalletMain' component={WalletMain} />
          <Stack.Screen name='Recharge' component={Recharge} />
          <Stack.Screen name='Refund' component={Refund} />
          <Stack.Screen name='Transfer' component={Transfer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!"
])