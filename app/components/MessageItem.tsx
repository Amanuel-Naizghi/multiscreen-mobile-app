import { StyleSheet, Text, View } from 'react-native';

type MessageItemProps = {
  sender: string;
  preview: string;
  date: string;
};

export default function MessageItem({
  sender,
  preview,
  date,
}: MessageItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>▦</Text>
      </View>

      <View style={styles.message}>
        <View style={styles.topRow}>
          <Text
            style={styles.sender}
            numberOfLines={1}
          >
            {sender}
          </Text>

          <Text style={styles.date}>{date}</Text>
        </View>

        <Text
          style={styles.preview}
          numberOfLines={1}
        >
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  icon: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: '#3b8f7a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconText: {
    color: '#ffffff',
    fontSize: 30,
  },

  message: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sender: {
    flex: 1,
    fontSize: 17,
    color: '#333333',
  },

  date: {
    marginLeft: 8,
    fontSize: 13,
    color: '#666666',
  },

  preview: {
    marginTop: 6,
    fontSize: 15,
    color: '#555555',
  },
});