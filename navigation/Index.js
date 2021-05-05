import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./../screen/ToDo";
import Home from "./../screen/Home";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text } from "react-native";
import PostsNavigator from "./PostsNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Navigator tabBarOptions={{ tabStyle: { backgroundColor: "white" } }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={30}
              color={focused ? "rgb(20, 116, 200)" : "rgb(131, 128, 134)"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgb(20, 116, 200)" : "rgb(131, 128, 134)",
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Screen
        name="Posts"
        component={PostsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="clone"
              size={30}
              color={focused ? "rgb(20, 116, 200)" : "rgb(131, 128, 134)"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgb(20, 116, 200)" : "rgb(131, 128, 134)",
              }}
            >
              Posts
            </Text>
          ),
        }}
      />
      <Screen
        name="ToDo"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list"
              size={30}
              color={focused ? "rgb(20, 116, 200)" : "rgb(131, 128, 134)"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "rgb(20, 116, 200)" : "rgb(131, 128, 134)",
              }}
            >
              ToDo
            </Text>
          ),
        }}
      />
    </Navigator>
  );
}
