import { Stack } from 'expo-router';

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
      />

      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          title: 'Job Details',
        }}
      />
    </Stack>
  );
}