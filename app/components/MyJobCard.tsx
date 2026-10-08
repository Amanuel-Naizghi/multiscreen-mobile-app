import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

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
      <View style={styles.topRow}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>
            {status === 'Applied'
              ? 'Employer reviewing applications'
              : status === 'Interviewing'
              ? 'Interview'
              : 'Not selected by employer'}
          </Text>
        </View>

        <Image
          source={require('../../assets/menu.png')}
          style={styles.moreIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.company}>{company}</Text>

      <Text style={styles.location}>Remote</Text>

      <Text style={styles.appliedDate}>
        Applied on Indeed on May 30
      </Text>

      <View style={styles.reviewBox}>
        <Image
          source={require('../../assets/applications.png')}
          style={styles.appIcon}
          resizeMode="contain"
        />

        <Text style={styles.reviewText}>
          80% of applications have been{'\n'}
          reviewed
        </Text>
      </View>

      <View style={styles.updateBox}>
        <View style={styles.updateHeader}>
          <Text style={styles.updateTitle}>
            Any updates since you applied?
          </Text>

          <Text style={styles.close}>x</Text>
        </View>

        <Pressable style={styles.updateButton}>
          <Text style={styles.updateButtonText}>
            I am being interviewed
          </Text>
        </Pressable>

        <Pressable style={styles.updateButton}>
          <Text style={styles.updateButtonText}>
            I have a different update
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 30,
    padding: 20,
    marginTop: 14,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  statusBadge: {
    backgroundColor: '#eaf3ff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  statusBadgeText: {
    color: '#1764b0',
    fontSize: 12,
    fontWeight: '700',
  },

  moreIcon: {
    width: 28,
    height: 28,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#292929',
    marginBottom: 12,
  },

  company: {
    fontSize: 20,
    color: '#292929',
    marginBottom: 12,
  },

  location: {
    fontSize: 20,
    color: '#292929',
    marginBottom: 10,
  },

  appliedDate: {
    fontSize: 18,
    color: '#858585',
    marginBottom: 10,
  },

  reviewBox: {
    minHeight: 70,
    borderRadius: 24,
    backgroundColor: '#f1f2ed',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  appIcon: {
    width: 30,
    height: 30,
    marginRight: 18,
  },

  reviewText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
  },

  updateBox: {
    backgroundColor: '#eaf3ff',
    borderRadius: 24,
    padding: 18,
  },

  updateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  updateTitle: {
    flex: 1,
    fontSize: 18,
    color: '#292929',
  },

  close: {
    fontSize: 36,
    color: '#292929',
    marginLeft: 10,
    marginTop: -25,
  },

  updateButton: {
    minHeight: 50,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#dddddd',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    paddingHorizontal: 15,
  },

  updateButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1764b0',
    textAlign: 'center',
  },
});