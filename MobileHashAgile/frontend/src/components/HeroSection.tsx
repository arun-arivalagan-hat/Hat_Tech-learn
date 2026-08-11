import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Fonts } from '../constants/fonts';

interface HeroSectionProps {
  onContactPress: () => void;
}

const { width } = Dimensions.get('window');

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.glowLeft} />
      <View style={styles.glowRight} />

      <View style={styles.content}>
        <Text style={styles.headingMain}>
          Engineering the{'\n'}
          <Text style={styles.headingAccent}>Intelligent Enterprise</Text>
        </Text>

        <Text style={styles.subtitle}>
          Secure, scalable AI solutions for measurable impact
        </Text>

        <Text style={styles.description}>
          From modern data platforms and machine learning systems to AI-powered products and intelligent automation, our teams help organizations move from AI strategy to production-grade deployment faster and with confidence.
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/image.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onContactPress}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={['#7C65F8', '#BA66FF', '#EC3F62']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBtn}
          >
            <Text style={styles.btnText}>Contact Now</Text>
            <Ionicons name="arrow-forward-outline" size={20} color="#FFFFFF" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
    paddingHorizontal: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  glowLeft: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(186, 102, 255, 0.12)',
  },
  glowRight: {
    position: 'absolute',
    top: 50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(236, 63, 98, 0.12)',
  },
  content: {
    gap: 14,
  },
  headingMain: {
    fontFamily: Fonts.extraBold,
    fontSize: 34,
    fontWeight: '800',
    color: '#111836',
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  headingAccent: {
    fontFamily: Fonts.extraBold,
    color: '#BA66FF',
  },
  subtitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 19,
    fontWeight: '600',
    color: '#111836',
    lineHeight: 25,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#475467',
    lineHeight: 22,
  },
  imageContainer: {
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: width - 40,
    height: (width - 40) * 0.72,
  },
  buttonWrapper: {
    marginTop: 6,
  },
  gradientBtn: {
    height: 52,
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#EC3F62',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  btnText: {
    fontFamily: Fonts.semiBold,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

