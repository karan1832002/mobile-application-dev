import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from "react";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6b8bff',
        tabBarInactiveTintColor: '#fff',
        tabBarIconStyle: { 
          marginTop: 12,
        },
        tabBarStyle: {
          backgroundColor: 'rgba(37, 41, 46, 0.55)',
          borderRadius: 50,
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          height: 70,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
        },
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={20} color={color} />
        }} 
      />

      <Tabs.Screen 
        name="inbox" 
        options={{ 
          title: 'Inbox',
          tabBarIcon: ({ color }) => <Entypo name="inbox" size={20} color={color} />
        }} 
      />

      <Tabs.Screen
        name="explore" 
        options={{ 
          title: 'Explore',
          tabBarIcon: ({ color }) => <Ionicons name="telescope" size={20} color={color} />
        }} 
      />

      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={20} paddingTop={4} color={color} />
        }} 
      />

      <Tabs.Screen
  name="github"
  options={{
    title: '',
    tabBarIcon: ({ color }) => <FontAwesome6 name="github" size={24} color={color} />
  }}
/>

    </Tabs>
  );
}