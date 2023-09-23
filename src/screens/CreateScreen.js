import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Context as BlogContext } from "../context/BlogContext";
export default function CreateScreen({ navigation }) {
  // console.log(navigation);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.text1}>Enter Title:</Text>
      <TextInput
        style={styles.input1}
        value={title}
        placeholder="Enter Title"
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.text2}>Enter Content:</Text>
      <TextInput
        style={styles.input2}
        value={content}
        placeholder="Enter content"
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      >
        <Text>ADD BLOG POST</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  text2: { fontSize: 20, alignSelf: "center", marginTop: 10, marginBottom: 10 },
  input1: {
    fontSize: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    padding: 6,
  },
  input2: {
    fontSize: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    padding: 6,
  },
  btn: {
    margin: 10,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
    backgroundColor: "#87CEEB",
    padding: 10,
    alignItems: "center",
  },
});
