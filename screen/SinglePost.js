import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/core"; // To use >> useNavigation
function PostsDetails() {
  const { params } = useRoute();

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Image
        style={{ width: "100%", height: "70%" }}
        source={require("./image.jpg")}
      />
      <Text style={{ margin: "10%" }}>{params.title}</Text>
    </View>
  );
}

export default PostsDetails;
