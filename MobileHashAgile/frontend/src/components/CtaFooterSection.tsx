import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { HashAgileLogo } from './HashAgileLogo';
import { Fonts } from '../constants/fonts';

interface CtaFooterSectionProps {
  onContactPress: () => void;
  onSelectNav: (name: string) => void;
  onScrollToTop: () => void;
}

export const CtaFooterSection: React.FC<CtaFooterSectionProps> = ({
  onContactPress,
  onSelectNav,
  onScrollToTop,
}) => {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  const navItems = [
    'Home',
    'Expertise',
    'Company',
    'Insights',
    'Careers',
    'Portfolio',
    'Contact Us',
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.ctaSection}>
        <Text style={styles.ctaHeading}>
          Ready to Build AI-Powered Enterprise Systems?
        </Text>
        <Text style={styles.ctaSubtext}>
          HashAgile partners with organisations to build secure, scalable, and production-ready AI solutions that deliver measurable business value. Let's explore how applied AI can accelerate your enterprise transformation.
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onContactPress}
          style={styles.ctaBtnTouch}
        >
          <LinearGradient
            colors={['#6B46FE', '#9053F6', '#E6007A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.ctaBtnGradient}
          >
            <Text style={styles.ctaBtnText}>Contact Now</Text>
            <Ionicons name="arrow-forward-outline" size={20} color="#FFFFFF" />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerTopRow}>
          <HashAgileLogo isDarkBg={true} />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onScrollToTop}
            style={styles.scrollTopBtnWrapper}
          >
            <LinearGradient
              colors={['#7C65F8', '#BA66FF', '#EC3F62']}
              style={styles.scrollTopBtn}
            >
              <Ionicons name="chevron-up" size={22} color="#FFFFFF" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.footerBlock}>
          <Text style={styles.blockTitle}>Office</Text>
          <Text style={styles.blockText}>
            Ground Floor, Rathinam Techzone, Block A1, Pollachi Main Rd, near Gate #3, Coimbatore, Tamil Nadu 641021
          </Text>
        </View>

        <View style={styles.footerBlock}>
          <Text style={styles.blockTitle}>Contact</Text>
          <View style={styles.contactRow}>
            <Ionicons name="call-outline" size={16} color="rgba(255,255,255,0.8)" />
            <Text style={styles.contactText}>+91 93451 11808</Text>
          </View>
          <View style={styles.contactRow}>
            <Ionicons name="mail-outline" size={16} color="rgba(255,255,255,0.8)" />
            <Text style={styles.contactText}>info@hashagile.com</Text>
          </View>
          <View style={styles.contactRow}>
            <Ionicons name="mail-outline" size={16} color="rgba(255,255,255,0.8)" />
            <Text style={styles.contactText}>careers@hashagile.com</Text>
          </View>
        </View>

        <View style={styles.linksGrid}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => onSelectNav(item)}
              activeOpacity={0.7}
              style={styles.linkTouch}
            >
              <Text style={styles.linkText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footerBottomRow}>
          <Text style={styles.copyrightText}>
            Copyright @ 2026 Hash Agile Technologies
          </Text>

          <View style={styles.socialsRow}>
            <TouchableOpacity
              onPress={() => openLink('https://linkedin.com')}
              style={styles.socialCircle}
            >
              <Ionicons name="logo-linkedin" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink('https://instagram.com')}
              style={styles.socialCircle}
            >
              <Ionicons name="logo-instagram" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
  },
  ctaSection: {
    paddingVertical: 36,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFFFFF',
  },
  ctaHeading: {
    fontFamily: Fonts.bold,
    fontSize: 25,
    fontWeight: '700',
    color: '#13153F',
    textAlign: 'center',
    lineHeight: 32,
  },
  ctaSubtext: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#625B67',
    textAlign: 'center',
    lineHeight: 22,
  },
  ctaBtnTouch: {
    width: '100%',
    marginTop: 8,
  },
  ctaBtnGradient: {
    height: 52,
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 4,
    shadowColor: '#E6007A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaBtnText: {
    fontFamily: Fonts.semiBold,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#313043',
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 24,
  },
  footerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  scrollTopBtnWrapper: {
    borderRadius: 22,
    overflow: 'hidden',
  },
  scrollTopBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBlock: {
    gap: 6,
  },
  blockTitle: {
    fontFamily: Fonts.semiBold,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  blockText: {
    fontFamily: Fonts.regular,
    color: '#E0DEF0',
    fontSize: 13.5,
    lineHeight: 21,
    fontWeight: '300',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 2,
  },
  contactText: {
    fontFamily: Fonts.regular,
    color: '#E0DEF0',
    fontSize: 13.5,
    fontWeight: '300',
  },
  linksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  linkTouch: {
    marginRight: 10,
  },
  linkText: {
    fontFamily: Fonts.regular,
    color: '#E0DEF0',
    fontSize: 14,
    fontWeight: '300',
  },
  footerBottomRow: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  copyrightText: {
    fontFamily: Fonts.regular,
    color: 'rgba(224, 222, 240, 0.8)',
    fontSize: 12.5,
    textAlign: 'center',
  },
  socialsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  socialCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

