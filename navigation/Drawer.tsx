import * as React from "react";
import { Button, TouchableOpacity, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";

import TabTwoScreen from "../screens/TabTwoScreen";
import TabOneScreen from "../screens/TabOneScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TabOneScreen">
        <Drawer.Screen name="TabOneScreen" component={TabOneScreen} />
        <Drawer.Screen name="TabTwoScreen" component={TabTwoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
