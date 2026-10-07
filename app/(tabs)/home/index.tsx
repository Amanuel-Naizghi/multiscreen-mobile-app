import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

import JobCard from '../../components/JobCard';
import { jobs } from '../../data/jobs';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            id={item.id}
            title={item.title}
            company={item.company}
            location={item.location}
            salary={item.salary}
          />
        )}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Image
                source={require('../../../assets/indeed.jpg')}
                style={styles.logo}
                resizeMode="contain"
              />

              <Image
                source={require('../../../assets/notification.png')}
                style={styles.notification}
                resizeMode="contain"
              />
            </View>

            <View style={styles.searchBox}>
              <Image
                source={require('../../../assets/search-icon.png')}
                style={styles.searchIcon}
                resizeMode="contain"
              />

              <TextInput
                placeholder="Find jobs"
                placeholderTextColor="#777777"
                style={styles.searchInput}
              />
            </View>

            <Text style={styles.welcome}>
              Welcome, AMANUEL
            </Text>

            <View style={styles.quickActions}>
             <Pressable style={styles.actionButton}>
                <Image
                  source={require('../../../assets/pay.png')}
                  style={styles.actionIcon}
                  resizeMode="contain"
                />

                <Text style={styles.actionText}>Add pay</Text>
              </Pressable>

             <Pressable style={styles.actionButton}>
              <Image
                source={require('../../../assets/commute.png')}
                style={styles.actionIcon}
                resizeMode="contain"
              />

              <Text style={styles.actionText}>Add commute</Text>
            </Pressable>
            </View>

            <Text style={styles.sectionTitle}>Jobs for you</Text>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#dce8ff',
  },

  list: {
    paddingBottom: 30,
  },

  header: {
    marginTop: 20,
    height: 70,
    paddingHorizontal: 22,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 115,
    height: 45,
  },

  notification: {
    width: 32,
    height: 32,
  },

  searchBox: {
    marginHorizontal: 16,
    marginTop: 10,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 19,
  },

  welcome: {
    marginTop: 20,
    marginHorizontal: 22,
    fontSize: 25,
    fontWeight: '700',
    color: '#222222',
  },

  quickActions: {
    flexDirection: 'row',
    marginHorizontal: 22,
    marginTop: 25,
    gap: 12,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },

  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  actionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1764b0',
  },

  sectionTitle: {
    marginHorizontal: 22,
    marginTop: 20,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '700',
    color: '#222222',
  },

  
});