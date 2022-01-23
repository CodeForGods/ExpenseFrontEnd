import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import Monthly from "../screens/Monthly";

const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          headerStyle: {
            // backgroundColor
          },
        })}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login Page",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "red",
              fontSize: 25,
              fontWeight: "300",
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "My Home Page",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerShown: true,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Month"
          component={Monthly}
          options={{
            headerShown: true,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;
