import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack, darkTheme, defTheme } from './navigation/MainStack';
import { useAppState } from './hooks/useAppState';
import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query';
import { AppStateStatus, Platform } from 'react-native';
import { useOnlineManager } from './hooks/useOnlineManager';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  useOnlineManager();
  useAppState(onAppStateChange);
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={scheme.colorScheme === 'light' ? defTheme : darkTheme}>
        <MainStack />
        <StatusBar />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
