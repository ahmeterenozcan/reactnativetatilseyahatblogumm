import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}>
      {/* Ana Sayfa */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={28} color={color} />
          ),
        }}
      />

      {/* Bloğum */}
      <Tabs.Screen
        name="blog"
        options={{
          title: 'Bloğum',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="article" size={28} color={color} />
          ),
        }}
      />

      {/* Hakkımızda */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'Hakkımızda',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" size={28} color={color} />
          ),
        }}
      />

      {/* İletişim */}
      <Tabs.Screen
        name="contact"
        options={{
          title: 'İletişim',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contact-mail" size={28} color={color} />
          ),
        }}
      />

      {/* Blog Ekle */}
      <Tabs.Screen
        name="addblog"
        options={{
          title: 'Blog Ekle',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="create" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}