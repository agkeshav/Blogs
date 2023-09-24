import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect } from "react";
import { Context as BlogContext } from "../context/BlogContext";
export default function ShowScreen(props) {
  let id = props.route.params.id;
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => props.navigation.navigate("Edit", { id })}
        >
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);
  return (
    <View style={styles.cardStyle}>
      <Text style={styles.titleText}>{blogPost.title}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.contentText}>{blogPost.content}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    alignItems: "flex-start",
    borderColor: "black",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 20,
    textAlign: "left",
  },
  headerIcon: {
    alignItems: "center",
    verticalAlign: "middle",
    marginRight: 20,
  },
});
