import { FlatList, StyleSheet, Text, View } from 'react-native';

import MessageItem from '../components/MessageItem';
import { messages } from '../data/messages';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageItem
            sender={item.sender}
            preview={item.preview}
            date={item.date}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 10,
  },
});