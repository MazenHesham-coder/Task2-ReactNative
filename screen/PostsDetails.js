import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core"; // To use >> useNavigation
function PostsDetails() {
  const [posts, setPosts] = useState([]);

  const { navigate } = useNavigation(); // should be used in screen or component used in screen

  const handlePressDetails = (postid) => {
    const singlePost = posts[parseInt(postid) - 1];
    navigate("SinglePost", singlePost);
  };

  useEffect(async () => {
    const data = await fetch("http://jsonplaceholder.typicode.com/photos");
    const validatedData = await data.json();
    setPosts(validatedData.splice(0, 10));
    return null;
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handlePressDetails(item.id)}>
              <Text style={{ textAlign: "center" }}>{item.title}</Text>
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("./image.jpg")}
              />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
}

export default PostsDetails;
