import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import ShowScreen from "./src/screens/ShowScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
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
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={{
              title: "Blog List",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{
              title: "Create Blog",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{
              title: "Edit Blog",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
