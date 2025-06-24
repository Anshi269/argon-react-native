import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Icon } from 'galio-framework';

const UserAgreement = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" family="Feather" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Agreement</Text>
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
      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 30 }}>
        <Text style={styles.highlightedText}>
          Pelosi is nothing if not purposeful. The following day, rallying with Democratic
          candidates in a San Francisco park, she would wear an orange pantsuit, explaining to
          crowds that orange was "the color of gun-violence protection."
        </Text>

        <Text style={styles.normalText}>
          This afternoon she had booked a table at Delancey Street, a restaurant that was famous,
          she said, for employing ex-convicts. She added emphatically, in case I might have missed
          the point. Pelosi told me that she and the House Democrats had every intention of working
          with President Trump on things like lowering prescription drug prices and infrastructure.
        </Text>

        <Text style={styles.sectionTitle}>1. Terms of Service</Text>
        <Text style={styles.normalText}>
          By using our application, you agree to comply with all applicable laws and regulations. 
          You are responsible for maintaining the confidentiality of your account information.
        </Text>

        <Text style={styles.sectionTitle}>2. Privacy Policy</Text>
        <Text style={styles.normalText}>
          We collect personal information to provide and improve our services. Your data will be 
          protected according to our security standards and will not be shared without your consent.
        </Text>

        <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
        <Text style={styles.normalText}>
          Users must not engage in any illegal activities or violate intellectual property rights.
          Any abusive behavior may result in account termination.
        </Text>

        <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
        <Text style={styles.normalText}>
          Our company shall not be liable for any indirect, incidental, or consequential damages 
          arising from the use of our services.
        </Text>

        <Text style={styles.sectionTitle}>5. Changes to Agreement</Text>
        <Text style={styles.normalText}>
          We reserve the right to modify these terms at any time. Continued use of the service 
          after changes constitutes acceptance of the new terms.
        </Text>

        <TouchableOpacity style={styles.agreeButton}>
          <Text style={styles.agreeButtonText}>I Agree to the Terms</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  highlightedText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 20,
    lineHeight: 24,
  },
  normalText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 20,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
    marginTop: 10,
  },
  agreeButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  agreeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UserAgreement;