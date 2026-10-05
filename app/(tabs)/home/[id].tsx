import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Job Details</Text>
      <Text>Job ID: {id}</Text>
    </View>
  );
}