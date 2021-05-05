import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Posts from "./../screen/Posts";
import SinglePost from "./../screen/SinglePost";
import PostsDetails from "./../screen/PostsDetails";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core"; // To use >> useNavigation

const { Navigator, Screen } = createStackNavigator();

export default function PostsNavigator() {
  const { navigate } = useNavigation();
  const handleBack = () => {
    navigate("../screen/Posts");
  };
  return (
    <Navigator>
      <Screen name="Posts" component={Posts}></Screen>

      <Screen
        name="posts"
        component={PostsDetails}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={handleBack}>
              {" "}
              <Text></Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: () => "center",
        }}
      ></Screen>
      <Screen name="SinglePost" component={SinglePost}></Screen>
    </Navigator>
  );
}
