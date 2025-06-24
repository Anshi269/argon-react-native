import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon } from 'galio-framework';

const Notifications = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Personal');

  const notifications = {
    Personal: [
      {
        title: 'About your order #45C23B',
        time: '15:30',
        description:
          "Wifey made the best Father's Day meal ever. So thankful, so happy.",
        icon: 'shopping-bag',
      },
      {
        title: 'Customize our products.',
        time: '11:30',
        description: 'Now you can made the best and perfect clothes just for you.',
        icon: 'grid',
      },
      {
        title: 'Breaking News! We have new methods to payment.',
        time: '10:30',
        description:
          'Learn how to pay off debt fast using the stack method.',
        icon: 'zap',
      },
      {
        title: 'We took into consideration multiple use cases.',
        time: '04:10',
        description: 'Came up with some specific elements for you.',
        icon: 'layers',
      },
    ],
    System: {
      unread: [
        {
          title: 'The new message from the author.',
          time: '2 hrs ago',
          type: 'New message',
        },
        {
          title: 'A confirmed request by one party.',
          time: '3 hrs ago',
          type: 'New Order',
        },
      ],
      read: [
        {
          title: 'Let’s meet at Starbucks at 11:30. Wdyt?',
          time: '1 day ago',
          type: 'Last message',
        },
        {
          title: 'A new issue has been reported for Argon.',
          time: '2 days ago',
          type: 'Product issue',
        },
        {
          title: 'New likes on your photo.',
          time: '4 days ago',
          type: 'New likes',
        },
      ],
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header without icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" family="Feather" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 22 }} /> {/* Empty to center title */}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {activeTab === 'Personal' ? (
          notifications.Personal.map((item, index) => (
            <View key={index} style={styles.notificationBox}>
              <View style={styles.iconCircle}>
                <Icon name={item.icon} family="Feather" size={18} color="#3B82F6" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.textBold}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          ))
        ) : (
          <>
            <Text style={styles.sectionTitle}>Unread notifications</Text>
            {notifications.System.unread.map((item, index) => (
              <SystemNotificationItem key={index} item={item} />
            ))}
            <Text style={styles.sectionTitle}>Read notifications</Text>
            {notifications.System.read.map((item, index) => (
              <SystemNotificationItem key={index} item={item} read />
            ))}
          </>
        )}
      </ScrollView>

      {/* Bottom Tab Footer */}
      <View style={styles.bottomTabs}>
        {['Personal', 'System'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.bottomTabItem}
          >
            <Icon
              name={tab === 'Personal' ? 'user' : 'settings'}
              family="Feather"
              size={20}
              color={activeTab === tab ? '#3B82F6' : '#9CA3AF'}
            />
            <Text
              style={[
                styles.bottomTabText,
                activeTab === tab && { color: '#3B82F6', fontWeight: '600' },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SystemNotificationItem = ({ item, read }) => (
  <View style={styles.notificationBox}>
    <View
      style={[
        styles.iconCircle,
        { backgroundColor: read ? '#F3F4F6' : '#D1FAE5' },
      ]}
    >
      <Icon
        name="info"
        family="Feather"
        size={18}
        color={read ? '#6B7280' : '#10B981'}
      />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.meta}>{item.type}</Text>
      <Text style={styles.textBold}>{item.title}</Text>
    </View>
    <Text style={styles.time}>{item.time}</Text>
  </View>
);

export default Notifications;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 80, // Space for bottom tabs
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginTop: 20,
    marginBottom: 10,
  },
  notificationBox: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textBold: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
  },
  meta: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 10,
    marginTop: 4,
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
});
