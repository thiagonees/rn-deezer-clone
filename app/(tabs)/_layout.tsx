import React from 'react';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  function displayIcon(
    iconName: string,
    outsideIconName: string,
    color: string,
    focused: boolean) {
    return (
      <View className="flex-row items-center justify-center rounded-lg w-[50px] bg-[#E2D4FD]">
        <Ionicons name={
          (focused ? iconName : outsideIconName) as keyof typeof Ionicons.glyphMap} color={color} size={24} />
      </View>
    )
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hoe',
          tabBarIcon: ({ color, focused }) => displayIcon("home", "home-outline", color, focused),
        }}
      />
        <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, focused }) => displayIcon("compass", "compass-outline", color, focused),
        }}
      />
        <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, focused }) => displayIcon("heart", "heart-outline", color, focused),
        }}
      />
        <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color, focused }) => displayIcon("search", "search-outline", color, focused),
        }}
      />
    </Tabs>
  );
}
