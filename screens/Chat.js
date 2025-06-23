import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

const messages = [
  {
    sender: 'Jessica Jones',
    text: 'Hey there! How are you today? Can we meet and talk? Thanks!',
    time: '16:31 PM',
    side: 'left',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    sender: 'You',
    text: 'Sure, just let me finish something and I\'ll call you.',
    time: '16:34 PM',
    side: 'right',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
  {
    sender: 'Jessica Jones',
    text: 'OK. Cool! See you!',
    time: '16:35 PM',
    side: 'left',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    sender: 'You',
    text: 'Bye. Bye.',
    time: '16:36 PM',
    side: 'right',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
];

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <Block flex style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text color="#333" size={24}>←</Text>
          </TouchableOpacity>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
            style={styles.headerAvatar} 
          />
          <Text bold size={18} color="#333" style={styles.headerName}>
            Jessica Jones
          </Text>
        </View>

        {/* Chat Area */}
        <ScrollView style={styles.chatArea} showsVerticalScrollIndicator={false}>
          {messages.map((msg, idx) => (
            <View
              key={idx}
              style={[
                styles.messageRow,
                msg.side === 'right' ? styles.rowReverse : styles.rowNormal,
              ]}
            >
              <Image source={{ uri: msg.avatar }} style={styles.avatar} />
              <View
                style={[
                  styles.message,
                  msg.side === 'right' ? styles.rightMessage : styles.leftMessage,
                ]}
              >
                <Text
                  size={16}
                  color={msg.side === 'right' ? theme.COLORS.WHITE : '#333'}
                  style={styles.messageText}
                >
                  {msg.text}
                </Text>
                <Text size={12} style={[
                  styles.timestamp,
                  { color: msg.side === 'right' ? 'rgba(255,255,255,0.7)' : '#999' }
                ]}>
                  {msg.time}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Message"
              placeholderTextColor="#999"
              style={styles.input}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text color="#fff" size={16}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Block>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerName: {
    flex: 1,
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  rowNormal: {
    justifyContent: 'flex-start',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  message: {
    maxWidth: width * 0.75,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  leftMessage: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rightMessage: {
    backgroundColor: '#667EEA',
    borderBottomRightRadius: 4,
  },
  messageText: {
    lineHeight: 20,
    marginBottom: 4,
  },
  timestamp: {
    alignSelf: 'flex-end',
    fontSize: 11,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#667EEA',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});