import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fonts } from '../constants/fonts';

export const TrustSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.title}>Powered by Trust & Excellence</Text>
        <Text style={styles.subtitle}>
          Security, engineering excellence, and a people-first culture shape how we build, collaborate, and deliver.
        </Text>
      </View>

      <View style={styles.certCard}>
        <View style={styles.cardTopRow}>
          <Image
            source={require('../../assets/images/iso.png')}
            style={styles.certImage}
            resizeMode="contain"
          />
          <View style={styles.cardTextInfo}>
            <Text style={styles.certTitle}>ISO 27001 : 2022</Text>
            <Text style={styles.certSubtitle}>
              Information Security Management
            </Text>
          </View>
        </View>

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Certified | Since 2022</Text>
          </View>
        </View>

        <Text style={styles.certDesc}>
          Internationally recognized standard for establishing, implementing, and maintaining a rigorous information security management system across our entire infrastructure.
        </Text>
      </View>

      <View style={styles.certCard}>
        <View style={styles.cardTopRow}>
          <Image
            source={require('../../assets/images/greatplace.png')}
            style={styles.certImage}
            resizeMode="contain"
          />
          <View style={styles.cardTextInfo}>
            <Text style={styles.certTitle}>Great Place to Work</Text>
            <Text style={styles.certSubtitle}>
              Workplace Culture & Employee Trust
            </Text>
          </View>
        </View>

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Certified | Since 2024</Text>
          </View>
        </View>

        <Text style={styles.certDesc}>
          Awarded based on confidential employee surveys measuring trust, pride, and camaraderie benchmarked against thousands of organizations worldwide.
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={styles.statIconCircle}>
            <Ionicons name="people-outline" size={24} color="#7C65F8" />
          </View>
          <Text style={styles.statTitle}>200+ Engineers</Text>
          <Text style={styles.statSubtitle}>AI & Data Specialists</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconCircle}>
            <Ionicons name="sparkles-outline" size={24} color="#7C65F8" />
          </View>
          <Text style={styles.statTitle}>AI & Data Platform</Text>
          <Text style={styles.statSubtitle}>Built for enterprise-scale</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIconCircle}>
            <Ionicons name="globe-outline" size={24} color="#7C65F8" />
          </View>
          <Text style={styles.statTitle}>Global Delivery</Text>
          <Text style={styles.statSubtitle}>Onshore, offshore, hybrid</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EBFC',
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 20,
  },
  headerBlock: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    fontWeight: '700',
    color: '#13153F',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#36304A',
    textAlign: 'center',
    lineHeight: 21,
  },
  certCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: '#E5E8F3',
    elevation: 2,
    shadowColor: '#13153F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  certImage: {
    width: 60,
    height: 60,
  },
  cardTextInfo: {
    flex: 1,
    gap: 2,
  },
  certTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    fontWeight: '700',
    color: '#13153F',
  },
  certSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: '#625B67',
  },
  badgeRow: {
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(233, 213, 255, 0.8)',
  },
  badgeText: {
    fontFamily: Fonts.semiBold,
    color: '#8B5CF6',
    fontSize: 12,
    fontWeight: '600',
  },
  certDesc: {
    fontFamily: Fonts.regular,
    fontSize: 13.5,
    color: '#625B67',
    lineHeight: 20,
  },
  statsContainer: {
    gap: 12,
    marginTop: 8,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: 'rgba(124, 101, 248, 0.15)',
  },
  statIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F4F3FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  statTitle: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    fontWeight: '700',
    color: '#13153F',
  },
  statSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: '#625B67',
  },
});

