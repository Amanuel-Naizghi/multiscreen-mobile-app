import { FlatList, StyleSheet, Text, View } from 'react-native';

import MyJobCard from '../components/MyJobCard';
import { myJobs } from '../data/myJobs';

export default function MyJobsScreen() {
  return (
    <View style={styles.container}>
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
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>My Jobs</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={['Saved', 'Applied 3', 'Interviews', 'Archived']}
              keyExtractor={(item) => item}
              contentContainerStyle={styles.tabsContainer}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.tab,
                    item === 'Applied 3' && styles.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      item === 'Applied 3' && styles.selectedTabText,
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              )}
            />
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  listContent: {
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: '#242424',
    marginBottom: 28,
  },

  tabsContainer: {
    gap: 10,
    paddingBottom: 10,
  },

  tab: {
    height: 40,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: '#e1e1e1',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  selectedTab: {
    backgroundColor: '#292929',
    borderColor: '#292929',
  },

  tabText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#242424',
  },

  selectedTabText: {
    color: '#ffffff',
  },
});