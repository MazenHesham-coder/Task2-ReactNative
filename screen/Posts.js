import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core"; // To use >> useNavigation
function Posts() {
  const { navigate } = useNavigation(); // should be used in screen or component used in screen
  const handlePostDetails = () => {
    navigate("posts");
  };

  const { params } = useRoute();
  console.log(params);
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={handlePostDetails}
        style={{
          backgroundColor: "#7500b8",
          height: 50,
          width: 140,
          borderRadius: 25,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, textAlign: "center" }}>Get Posts</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Posts;
