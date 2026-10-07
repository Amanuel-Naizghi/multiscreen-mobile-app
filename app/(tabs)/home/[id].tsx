import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { jobs } from '../../data/jobs';

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>(); // Get the job ID from the URL parameters

  const job = jobs.find((item) => item.id === id);// Find the job with the matching ID

  // If the job is not found, display an error message
  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Job not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{job.title}</Text>

      <Text style={styles.company}>{job.company}</Text>

      <Text style={styles.location}>{job.location}</Text>

      {job.salary && (
        <Text style={styles.salary}>{job.salary}</Text>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Job details</Text>

        <Text style={styles.description}>
          We are looking for a motivated professional to join our
          team. This is an opportunity to work on interesting
          projects and develop your technical skills.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the job</Text>

        <Text style={styles.description}>
          The successful candidate will work with the team to
          develop, maintain, and improve applications while
          contributing to day-to-day technical activities.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
  },

  company: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
  },

  location: {
    fontSize: 15,
    marginBottom: 6,
  },

  salary: {
    fontSize: 15,
    marginBottom: 20,
  },

  section: {
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
  },

  error: {
    fontSize: 18,
    fontWeight: '600',
  },
});