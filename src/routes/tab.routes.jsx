import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={"Black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={"Black"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={"Black"} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
