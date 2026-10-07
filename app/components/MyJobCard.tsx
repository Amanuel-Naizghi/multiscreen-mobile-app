import { StyleSheet, Text, View } from 'react-native';

type MyJobCardProps = {
  title: string;
  company: string;
  status: string;
};

export default function MyJobCard({
  title,
  company,
  status,
}: MyJobCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.company}>{company}</Text>

      <Text style={styles.status}>{status}</Text>
    </View>
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

  status: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
});