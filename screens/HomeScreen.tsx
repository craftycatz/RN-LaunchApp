import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Card } from '../components/Card';

export function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center dark:text-white">
      <Card title="Card">
        <Text>Card Content</Text>
      </Card>
      <Button title="Toggle Theme" onPress={useColorScheme().toggleColorScheme} />
      <StatusBar />
    </View>
  );
}
