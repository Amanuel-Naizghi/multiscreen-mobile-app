import { Pressable, StyleSheet, Text, View } from 'react-native';

type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary?: string;
};

export default function JobCard({
  title,
  company,
  location,
  salary,
}: JobCardProps) {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.company}>{company}</Text>

      <Text style={styles.location}>{location}</Text>

      {salary && <Text style={styles.salary}>{salary}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  company: {
    marginTop: 6,
    fontSize: 14,
  },

  location: {
    marginTop: 4,
    fontSize: 14,
  },

  salary: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
  },
});