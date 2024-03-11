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
          tabBarIcon: ({ focused }) => (
            <Feather name="home" color={focused ? "#222" : "#ddd"} size={24} />
          ),
          tabBarLabel: "Início",
          tabBarActiveTintColor: "#222",
          tabBarInactiveTintColor: "#ddd",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="user" color={focused ? "#222" : "#ddd"} size={24} />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#222",
          tabBarInactiveTintColor: "#ddd",
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="list" color={focused ? "#222" : "#ddd"} size={24} />
          ),
          tabBarLabel: "Categorias",
          tabBarActiveTintColor: "#222",
          tabBarInactiveTintColor: "#ddd",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
