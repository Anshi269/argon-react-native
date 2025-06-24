import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Switch,
  ScrollView,
} from 'react-native';
import { Icon } from 'galio-framework';

const NotificationSettings = ({ navigation }) => {
  const [mentions, setMentions] = React.useState(true);
  const [follows, setFollows] = React.useState(true);
  const [comments, setComments] = React.useState(false);
  const [sellerFollows, setSellerFollows] = React.useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" family="Feather" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.notificationDot} />
            <Icon name="bell" family="Feather" size={22} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-bag" family="Feather" size={22} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Recommended Settings</Text>
        <Text style={styles.sectionDescription}>
          These are the most important settings
        </Text>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Someone mentions me</Text>
          <Switch
            value={mentions}
            onValueChange={setMentions}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor={mentions ? '#fff' : '#fff'}
          />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Anyone follows me</Text>
          <Switch
            value={follows}
            onValueChange={setFollows}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor={follows ? '#fff' : '#fff'}
          />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Someone comments me</Text>
          <Switch
            value={comments}
            onValueChange={setComments}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor={comments ? '#fff' : '#fff'}
          />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>A seller follows me</Text>
          <Switch
            value={sellerFollows}
            onValueChange={setSellerFollows}
            trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
            thumbColor={sellerFollows ? '#fff' : '#fff'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
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
    flex: 1,
    textAlign: 'center',
    marginLeft: -22, // to offset the left icon
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    zIndex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#F3F4F6',
    borderBottomWidth: 1,
  },
  toggleLabel: {
    fontSize: 16,
    color: '#111827',
  },
});