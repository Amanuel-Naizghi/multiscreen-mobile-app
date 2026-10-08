import { Image, View } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2167B1',
        tabBarInactiveTintColor: '#555555',
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },

        tabBarStyle: {
          height: 70,
          paddingTop: 0,
          paddingBottom: 8,
          marginBottom: 25,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: '#2167B1',
              }}
            >
              <Image
                source={
                  focused
                    ? require('../../assets/home-color.png')
                    : require('../../assets/home-normal.png')
                }
                style={{
                  width: 26,
                  height: 26,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      {/* MY JOBS */}
      <Tabs.Screen
        name="my-jobs"
        options={{
          title: 'My Jobs',

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: '#2167B1',
              }}
            >
              <Image
                source={
                  focused
                    ? require('../../assets/myjobs-color.png')
                    : require('../../assets/myjobs-normal.png')
                }
                style={{
                  width: 26,
                  height: 26,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      {/* MESSAGES */}
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: '#2167B1',
              }}
            >
              <Image
                source={
                  focused
                    ? require('../../assets/messages-color.png')
                    : require('../../assets/messages-normal.png')
                }
                style={{
                  width: 26,
                  height: 26,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: '#2167B1',
              }}
            >
              <Image
                source={
                  focused
                    ? require('../../assets/profile-color.png')
                    : require('../../assets/profile-normal.png')
                }
                style={{
                  width: 26,
                  height: 26,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}