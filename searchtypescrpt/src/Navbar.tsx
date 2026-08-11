import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { HashAgileLogo } from './HashAgileLogo';
import { Fonts } from '../constants/fonts';

interface NavbarProps {
  activeTab: string;
  onSelectNav: (name: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home' },
    { name: 'Expertise' },
    { name: 'Company' },
    { name: 'Insights' },
    { name: 'Careers' },
    { name: 'Portfolio' },
    { name: 'Contact Us' },
  ];

  const handleNavPress = (name: string) => {
    onSelectNav(name);
    setMenuOpen(false);
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaHeader}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNavPress('Home')}
          >
            <HashAgileLogo />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setMenuOpen(true)}
            accessibilityLabel="Open Navigation Menu"
          >
            <Ionicons name="menu" size={28} color="#111836" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Modal
        visible={menuOpen}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setMenuOpen(false)}
      >
        <SafeAreaView style={styles.modalSafeArea}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleNavPress('Home')}
            >
              <HashAgileLogo />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setMenuOpen(false)}
              accessibilityLabel="Close Navigation Menu"
            >
              <Ionicons name="close" size={28} color="#13153F" />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.modalNavList}
            showsVerticalScrollIndicator={false}
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <TouchableOpacity
                  key={link.name}
                  style={styles.navItem}
                  onPress={() => handleNavPress(link.name)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.navText,
                      isActive && styles.navTextActive,
                    ]}
                  >
                    {link.name}
                  </Text>
                  {isActive && <View style={styles.activeDot} />}
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.modalFooter}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleNavPress('Contact Us')}
            >
              <LinearGradient
                colors={['#7C65F8', '#BA66FF', '#EC3F62']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.contactBtnGradient}
              >
                <View style={styles.contactBtnContent}>
                  <Text style={styles.contactBtnText}>Contact Now</Text>
                  <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaHeader: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(17, 24, 54, 0.08)',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    zIndex: 40,
  },
  headerBar: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  iconButton: {
    padding: 6,
  },
  modalSafeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    height: 68,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
  },
  modalNavList: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 18,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  navText: {
    fontFamily: Fonts.regular,
    fontSize: 22,
    fontWeight: '400',
    color: '#13153F',
    letterSpacing: -0.3,
  },
  navTextActive: {
    fontFamily: Fonts.bold,
    color: '#FF548B',
    fontWeight: '700',
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF548B',
  },
  modalFooter: {
    padding: 24,
    paddingBottom: 36,
  },
  contactBtnGradient: {
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7C65F8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  contactBtnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactBtnText: {
    fontFamily: Fonts.semiBold,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});

