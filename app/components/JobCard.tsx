import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

type JobCardProps = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
};

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
}: JobCardProps) {
  return (
    <Link href={`/home/${id}`} asChild>
      <Pressable style={styles.card}>
        <View style={styles.topRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Easily apply</Text>
            </View>
          </View>

        <View style={styles.actions}>
          <Image
            source={require('../../assets/mark.png')}
            style={styles.jobActionIcon}
            resizeMode="contain"
          />

          <Image
            source={require('../../assets/dislike.png')}
            style={styles.jobActionIcon}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.company}>{company}</Text>

        <Text style={styles.location}>{location}</Text>

        <View style={styles.bottomRow}>
          {salary && (
            <View style={styles.infoBadge}>
              <Text style={styles.infoText}>{salary}</Text>
            </View>
          )}

          <View style={styles.infoBadge}>
            <Text style={styles.infoText}>Permanent</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 20,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    position: 'relative',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: '#e8f2ff',
  },

  badgeText: {
    color: '#1557a6',
    fontSize: 14,
    fontWeight: '700',
  },

  actions: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },

  jobActionIcon: {
    width: 30,
    height: 30,
  },

  icon: {
    fontSize: 28,
    color: '#222222',
  },

  title: {
    marginTop: 18,
    fontSize: 25,
    fontWeight: '700',
    color: '#222222',
  },

  company: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 26,
    color: '#555555',
  },

  location: {
    marginTop: 3,
    fontSize: 18,
    color: '#555555',
  },

  bottomRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },

  infoBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: '#f2f2ef',
  },

  infoText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555555',
  },
});