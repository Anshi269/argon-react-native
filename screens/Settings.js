import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Icon } from 'galio-framework';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" family="Feather" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
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

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Recommended Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Settings</Text>
          <Text style={styles.sectionDescription}>These are the most important settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingLabel}>Use FaceID to sign in</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingLabel}>Auto-Lock security</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, styles.lastRow]}>
            <Text style={styles.settingLabel}>Clothing</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Payment Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Settings</Text>
          <Text style={styles.sectionDescription}>These are also important settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingLabel}>Manage Payment Options</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, styles.lastRow]}>
            <Text style={styles.settingLabel}>Manage Gift Cards</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Privacy Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Settings</Text>
          <Text style={styles.sectionDescription}>Third most important settings</Text>

          <TouchableOpacity
  style={styles.settingRow}
  onPress={() => navigation.navigate('UserAgreement')}
>
  <Text style={styles.settingLabel}>User Agreement</Text>
  <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
</TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingLabel}>Privacy</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, styles.lastRow]}>
            <Text style={styles.settingLabel}>About</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Notification Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>
          <Text style={styles.sectionDescription}>Control your notification preferences</Text>

          <TouchableOpacity
            style={[styles.settingRow, styles.lastRow]}
            onPress={() => navigation.navigate('NotificationSettings')}
          >
            <Text style={styles.settingLabel}>Manage Notifications</Text>
            <Icon name="chevron-right" family="Feather" size={20} color="#111827" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

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
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    flex: 1,
    marginLeft: -22,
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#F3F4F6',
    borderBottomWidth: 1,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  settingLabel: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '400',
  },
});