import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Dashboard/Home";

const Todo_Stack = createStackNavigator();

const AppEntry: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Todo_Stack.Navigator>
        <Todo_Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Todo_Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppEntry;
