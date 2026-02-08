import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { Stack, Tabs, useRouter } from 'expo-router';
import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TabLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#093eff',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: 'rgba(78, 81, 83, 0.55)',
            borderRadius: 50,
            position: 'absolute',
            paddingTop: 7,
            paddingHorizontal: 30,
            bottom: 18,
            left: 16,
            right: 96,
            height: 74,
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.25,
            shadowRadius: 14,
            paddingBottom: Platform.OS === 'android' ? 8 : 16,
          },
          tabBarLabelPosition: 'below-icon',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Entypo name="home" size={22} color={color} />
          }}
        />

        <Tabs.Screen
          name="inbox"
          options={{
            title: 'Inbox',
            tabBarIcon: ({ color }) => <Entypo name="inbox" size={22} color={color} />
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <Ionicons name="telescope" size={22} color={color} />
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <FontAwesome name="user" size={22} color={color} />
          }}
        />

        <Tabs.Screen
          name="github"
         options={{
          href: null,
        }}
      />
      </Tabs>



      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.githubButton}
        onPress={() => router.push('/github')}
      >
        <View style={styles.githubBubble}>
          <Octicons name="mark-github" size={28} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  githubButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    zIndex: 30,
  },
  githubBubble: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(78, 81, 83, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
  },
});

export function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="\mobile-application-dev\assets\stuff\github.tsx"
        options={{ presentation: 'containedModal', headerShown: false }}
      />
    </Stack>
  );
}