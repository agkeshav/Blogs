import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useEffect } from "react";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
export default function IndexScreen({ navigation }) {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext); // here that value wil come which we have passed in the blogcontext.provider as props

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate("Create")}
        >
          <MaterialIcons name="add" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <FontAwesome name="trash-o" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  title: {
    textAlignVertical: "center",
    fontSize: 20,
    padding: 8,
    color: "white",
  },
  icon: {
    alignSelf: "center",
    paddingRight: 10,
  },
  headerIcon: {
    alignItems: "center",
    verticalAlign: "middle",
    paddingRight: 10,
  },
});
