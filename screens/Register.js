import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { Icon } from 'galio-framework';

const Register = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {/* Background image */}
      <ImageBackground
        source={require('../assets/imgs/register-bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" family="Feather" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Account</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Icon name="bell" family="Feather" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <Icon name="shopping-bag" family="Feather" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card */}
        <View style={styles.card}>
          {/* Social login */}
          <Text style={styles.socialTitle}>Sign up with</Text>
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="github" family="Feather" size={20} color="#5e72e4" />
              <Text style={styles.socialText}>GITHUB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" family="FontAwesome" size={20} color="#ea4335" />
              <Text style={styles.socialText}>GOOGLE</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.orText}>Or sign up with credentials</Text>

          {/* Inputs */}
          <View style={styles.inputGroup}>
            <Icon name="user" family="Feather" size={18} color="#9ca3af" style={styles.inputIcon} />
            <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#9ca3af" />
          </View>

          <View style={styles.inputGroup}>
            <Icon name="mail" family="Feather" size={18} color="#9ca3af" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Icon name="lock" family="Feather" size={18} color="#9ca3af" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9ca3af"
              secureTextEntry
            />
          </View>

          <Text style={styles.passwordStrength}>
            password strength: <Text style={{ color: 'green' }}>strong</Text>
          </Text>

          {/* Privacy Policy */}
          <View style={styles.privacyRow}>
            <View style={styles.checkbox}>
              <Icon name="check" family="Feather" size={12} color="#fff" />
            </View>
            <Text style={styles.privacyText}>
              I agree with the <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Button */}
          <TouchableOpacity style={styles.createBtn}>
            <Text style={styles.createBtnText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  card: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 12,
    textAlign: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  socialText: {
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 13,
    color: '#111827',
  },
  orText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginVertical: 15,
    fontSize: 14,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 14,
    backgroundColor: '#f9fafb',
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  passwordStrength: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  privacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 16,
    height: 16,
    backgroundColor: '#5e72e4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  privacyText: {
    fontSize: 13,
    color: '#6b7280',
  },
  link: {
    color: '#5e72e4',
    fontWeight: '600',
  },
  createBtn: {
    backgroundColor: '#5e72e4',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  createBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
