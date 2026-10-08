import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useLocalSearchParams, router } from 'expo-router';

import { jobs } from '../../data/jobs';

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const job = jobs.find((item) => item.id === id);

  if (!job) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Job not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* TOP NAVIGATION */}
        <View style={styles.topBar}>
          <Pressable onPress={() => router.back()}>
            <Image
              source={require('../../../assets/back.png')}
              style={styles.topIcon}
              resizeMode="contain"
            />
          </Pressable>

          <View style={styles.topActions}>
            <Pressable>
              <Image
                source={require('../../../assets/share.png')}
                style={styles.topIcon}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable>
              <Image
                source={require('../../../assets/mark.png')}
                style={styles.topIcon}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </View>

        {/* JOB TITLE */}
        <View style={styles.jobHeader}>
          <Text style={styles.title}>{job.title}</Text>

          <Text style={styles.company}>{job.company}</Text>
        </View>

        {/* JOB DETAILS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job details</Text>

          <View style={styles.detailRow}>
            <Image
              source={require('../../../assets/money.png')}
              style={styles.detailIcon}
              resizeMode="contain"
            />

            <Text style={styles.detailText}>
              {job.salary || '$16–$18 an hour'}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Image
              source={require('../../../assets/clock.png')}
              style={styles.detailIcon}
              resizeMode="contain"
            />

            <Text style={styles.detailText}>Permanent</Text>
          </View>

          <View style={styles.detailRow}>
            <Image
              source={require('../../../assets/location.png')}
              style={styles.detailIcon}
              resizeMode="contain"
            />

            <Text style={styles.detailText}>
              {job.location}
            </Text>
          </View>
        </View>

        {/* MATCH OVERVIEW */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match overview</Text>

          <Text style={styles.matchDescription}>
            Here's how the job details align with your{' '}
            <Text style={styles.profileLink}>profile</Text>.
          </Text>

          <Text style={styles.qualifications}>
            Qualifications: 1 of 2
          </Text>

          {/* QUALIFICATION 1 */}
          <View style={styles.qualificationRow}>
            <Image
              source={require('../../../assets/question.png')}
              style={styles.qualificationIcon}
              resizeMode="contain"
            />

            <Text style={styles.qualificationText}>
              Payroll processing
            </Text>

            <View style={styles.qualificationActions}>
              <Pressable style={styles.actionButton}>
                <Image
                  source={require('../../../assets/check.png')}
                  style={styles.actionIcon}
                  resizeMode="contain"
                />
              </Pressable>

              <Pressable style={styles.actionButton}>
                <Image
                  source={require('../../../assets/close.png')}
                  style={styles.actionIcon}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
          </View>

          {/* QUALIFICATION 2 */}
          <View style={styles.qualificationRow}>
            <Image
              source={require('../../../assets/check.png')}
              style={styles.qualificationIcon}
              resizeMode="contain"
            />

            <Text style={[styles.qualificationText, styles.qualifiedText]}>
              Accounting software
            </Text>
          </View>
        </View>

        {/* FULL DESCRIPTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Full job description
          </Text>

          <Text style={styles.description}>
            Data Entry, Book keeping, Payroll.
          </Text>

          <Text style={styles.description}>
            Job Type: Permanent
          </Text>

          <Text style={styles.description}>
            Pay: {job.salary || '$16.00-$18.00 per hour'}
          </Text>

          <Text style={styles.description}>
            Experience:
          </Text>

          <Text style={styles.bullet}>
            • QuickBooks: 1 year (preferred)
          </Text>

          <Text style={styles.bullet}>
            • bookkeeping: 1 year (preferred)
          </Text>

          <Text style={styles.workLocation}>
            Work Location: In person
          </Text>

          <View style={styles.showMore}>
            <Text style={styles.showMoreText}>Show more</Text>

            <Image
              source={require('../../../assets/arrow-down.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* APPLY BUTTONS */}
        <View style={styles.buttonsSection}>
          <Pressable style={styles.applyButton}>
            <Text style={styles.applyButtonText}>
              Apply with Indeed
            </Text>
          </Pressable>

          <Pressable style={styles.reportButton}>
            <Image
              source={require('../../../assets/report.png')}
              style={styles.reportIcon}
              resizeMode="contain"
            />

            <Text style={styles.reportText}>
              Report job
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  topBar: {
    height: 50,
    marginTop: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  topActions: {
    flexDirection: 'row',
    gap: 25,
  },

  topIcon: {
    width: 22,
    height: 22,
  },

  jobHeader: {
    paddingHorizontal: 32,
    paddingVertical: 28,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#292929',
    marginBottom: 8,
  },

  company: {
    fontSize: 18,
    color: '#3f3f3f',
  },

  section: {
    paddingHorizontal: 32,
    paddingVertical:10,
    borderTopWidth: 10,
    borderTopColor: '#f7f7f7',
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#292929',
    marginBottom: 15,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  detailIcon: {
    width: 25,
    height: 25,
    marginRight: 22,
  },

  detailText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
    flex: 1,
  },

  matchDescription: {
    fontSize: 18,
    lineHeight: 30,
    color: '#555555',
    marginBottom: 22,
  },

  profileLink: {
    color: '#1764b0',
    textDecorationLine: 'underline',
  },

  qualifications: {
    fontSize: 18,
    fontWeight: '700',
    color: '#292929',
    marginBottom: 15,
  },

  qualificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
  },

  qualificationIcon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },

  qualificationText: {
    flex: 1,
    fontSize: 15,
    color: '#555555',
  },

  qualifiedText: {
    color: '#287443',
  },

  qualificationActions: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 18,
    overflow: 'hidden',
  },

  actionButton: {
    width: 55,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#dddddd',
  },

  actionIcon: {
    width: 27,
    height: 27,
  },

  description: {
    fontSize: 18,
    lineHeight: 20,
    color: '#555555',
    marginBottom: 18,
  },

  bullet: {
    fontSize: 18,
    lineHeight: 20,
    color: '#555555',
    marginBottom: 10,
    marginLeft: 15,
  },

  workLocation: {
    fontSize: 18,
    color: '#aaaaaa',
    marginTop: 15,
  },

  showMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  showMoreText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#555555',
    marginRight: 10,
  },

  arrowIcon: {
    width: 24,
    height: 24,
  },

  buttonsSection: {
    paddingHorizontal: 32,
    paddingTop: 30,
    paddingBottom: 20,
    borderTopWidth: 10,
    borderTopColor: '#f7f7f7',
  },

  applyButton: {
    height: 50,
    borderRadius: 22,
    backgroundColor: '#0759c7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  applyButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },

  reportButton: {
    height: 50,
    borderRadius: 22,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  reportIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },

  reportText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },

  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notFoundText: {
    fontSize: 20,
  },
});