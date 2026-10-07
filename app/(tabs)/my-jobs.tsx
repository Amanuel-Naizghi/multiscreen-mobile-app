import { FlatList, StyleSheet, Text, View } from 'react-native';

import MyJobCard from '../components/MyJobCard';
import { myJobs } from '../data/myJobs';

export default function MyJobsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Jobs</Text>

      <FlatList
        data={myJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MyJobCard
            title={item.title}
            company={item.company}
            status={item.status}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
});