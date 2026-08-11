import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Fonts } from '../constants/fonts';

interface ServiceItem {
  id: string;
  label: string;
  activeTitle: string;
  activeDescription: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning Solutions',
    activeTitle: 'Engineering AI Solutions for Data-Driven Enterprises',
    activeDescription:
      'Enterprise leaders today need production-ready AI systems that integrate seamlessly with existing platforms and deliver real operational and business value.',
  },
  {
    id: 'data-engineering',
    label: 'Data Engineering & Modern Data Platforms',
    activeTitle: 'Architecting Modern Data Platforms & Intelligent Pipelines',
    activeDescription:
      'Unify fragmented enterprise data streams into high-performance, real-time analytics engines engineered for reliability, enterprise governance, and instant query response.',
  },
  {
    id: 'visual-analytics',
    label: 'Visual Analytics & Business Intelligence',
    activeTitle: 'Transforming Complex Enterprise Data into Actionable Insights',
    activeDescription:
      'Empower executive teams and domain experts with intuitive real-time dashboards, predictive visual models, and decision-ready intelligence engines.',
  },
  {
    id: 'mobility-apps',
    label: 'Mobility & Intelligent Applications',
    activeTitle: 'Building High-Performance Mobile & Edge AI Applications',
    activeDescription:
      'Deliver fluid, highly responsive multi-platform digital experiences powered by on-device intelligence, cloud-synchronized microservices, and robust UX architecture.',
  },
];

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('ai-ml');

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Our Services</Text>

      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#6B46FE', '#8B5CF6', '#E6007A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBanner}
        >
          <View style={styles.iconCircle}>
            <Ionicons name="sparkles" size={20} color="#FFFFFF" />
          </View>

          <Text style={styles.activeTitle}>{activeService.activeTitle}</Text>
          <Text style={styles.activeDescription}>
            {activeService.activeDescription}
          </Text>
        </LinearGradient>

        <View style={styles.servicesList}>
          {SERVICES_DATA.map((service, index) => {
            const isActive = service.id === activeServiceId;
            return (
              <TouchableOpacity
                key={service.id}
                activeOpacity={0.7}
                onPress={() => setActiveServiceId(service.id)}
                style={[
                  styles.serviceButton,
                  isActive ? styles.serviceButtonActive : styles.serviceButtonInactive,
                  index === SERVICES_DATA.length - 1 && styles.lastButton,
                ]}
              >
                <LinearGradient
                  colors={['#6B46FE', '#8B5CF6', '#E6007A']}
                  style={styles.dot}
                />
                <Text
                  style={[
                    styles.serviceLabel,
                    isActive ? styles.serviceLabelActive : styles.serviceLabelInactive,
                  ]}
                >
                  {service.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    fontWeight: '700',
    color: '#13153F',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(120, 140, 180, 0.2)',
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: '#13153F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  gradientBanner: {
    padding: 20,
    gap: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  activeTitle: {
    fontFamily: Fonts.bold,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  activeDescription: {
    fontFamily: Fonts.regular,
    color: 'rgba(255, 255, 255, 0.92)',
    fontSize: 13.5,
    fontWeight: '400',
    lineHeight: 19,
  },
  servicesList: {
    backgroundColor: '#FFFFFF',
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(120, 140, 180, 0.15)',
  },
  lastButton: {
    borderBottomWidth: 0,
  },
  serviceButtonActive: {
    backgroundColor: '#F4F2FF',
  },
  serviceButtonInactive: {
    backgroundColor: '#FFFFFF',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  serviceLabel: {
    fontFamily: Fonts.regular,
    flex: 1,
    fontSize: 14.5,
    lineHeight: 20,
  },
  serviceLabelActive: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
    color: '#13153F',
  },
  serviceLabelInactive: {
    fontFamily: Fonts.semiBold,
    fontWeight: '600',
    color: 'rgba(19, 21, 63, 0.85)',
  },
});

