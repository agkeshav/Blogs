import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
const Stack = createStackNavigator();
export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={{
              title: "Blog List",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
