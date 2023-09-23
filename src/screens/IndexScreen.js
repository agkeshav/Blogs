import { View, Text, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext); // here that value wil come which we have passed in the blogcontext.provider as props

  return (
    <View>
      <Button
        title="Add post"
        onPress={() => addBlogPost({ title: `Blog ${data.length + 1}` })}
      />
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}
