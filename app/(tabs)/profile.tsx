import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Image
          source={require('../../assets/myMenu.png')}
          style={styles.menu}
          resizeMode="contain"
        />
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AN</Text>
      </View>

      <Text style={styles.name}>
        AMANUEL NAIZGHI TESFATSION
      </Text>

      <Text style={styles.location}>Calgary, AB</Text>

      <Text style={styles.contact}>
        587-***-****  amanu...@gmail.com
      </Text>

      <View style={styles.visibility}>
        <Image
          source={require('../../assets/see.png')}
          style={styles.visibilityIcon}
          resizeMode="contain"
        />
        <Text style={styles.visibilityText}>
          Employers can find you
        </Text>
        <Image
          source={require('../../assets/down.png')}
          style={styles.arrow}
          resizeMode="contain"
        />
      </View>

      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeTabText}>Resume</Text>
        </View>

        <View style={styles.tab}>
          <Text style={styles.tabText}>Preferences</Text>
        </View>
      </View>

      <View style={styles.resumeCard}>
        <View style={styles.resumeHeader}>
          <View>
            <Text style={styles.resumeName}>
              Amanuel Tesfatsion new.pdf
            </Text>

            <Text style={styles.resumeDate}>May 23</Text>
          </View>

          <Text style={styles.more}>...</Text>
        </View>

        <View style={styles.resumePreview}>
          <Text style={styles.previewTitle}>
            AMANUEL NAIZGHI TESFATSION
          </Text>

          <Text style={styles.previewText}>
            Calgary, AB, Canada
          </Text>

          <Text style={styles.previewText}>
            PROFESSIONAL SUMMARY
          </Text>

          <Text style={styles.previewText}>
            Reliable Software Developer professional with
            experience in system design and development.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    paddingBottom: 30,
  },

  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  headerTitle: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: '700',
  },

  menu: {
    position: 'absolute',
    right: 20,
    top: 30,
    width: 30,
    height: 30,
  },

  avatar: {
    alignSelf: 'center',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#eaf2ff',
    borderWidth: 6,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  avatarText: {
    fontSize: 48,
    fontWeight: '600',
    color: '#1464c4',
  },

  name: {
    marginTop: 35,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },

  location: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#666666',
  },

  contact: {
    marginTop: 12,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 15,
    color: '#555555',
  },

  visibility: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 45,
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#b7dfbd',
    borderRadius: 30,
    backgroundColor: '#effbf0',
  },

  visibilityIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },

  visibilityText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#287a38',
  },

  arrow: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },

  tabs: {
    flexDirection: 'row',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },

  activeTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#333333',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },

  activeTabText: {
    fontSize: 18,
    fontWeight: '700',
  },

  tabText: {
    fontSize: 18,
    color: '#444444',
  },

  resumeCard: {
    margin: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 18,
    backgroundColor: '#ffffff',
  },

  resumeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resumeName: {
    fontSize: 17,
    fontWeight: '600',
  },

  resumeDate: {
    marginTop: 5,
    fontSize: 15,
    color: '#777777',
  },

  more: {
    fontSize: 20,
  },

  resumePreview: {
    marginTop: 15,
    minHeight: 200,
    padding: 25,
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#fafafa',
  },

  previewTitle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
  },

  previewText: {
    marginTop: 12,
    fontSize: 10,
    color: '#444444',
  },
});