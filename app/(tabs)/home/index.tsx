import { FlatList, StyleSheet, Text, View } from 'react-native';

import JobCard from '../../component/JobCard';
import { jobs } from '../../data/jobs';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find your next job</Text>

      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            title={item.title}
            company={item.company}
            location={item.location}
            salary={item.salary}
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