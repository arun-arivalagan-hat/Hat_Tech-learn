import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts } from '../constants/fonts';

interface DeliveryTab {
  id: 'idea' | 'build' | 'ship';
  label: string;
  description: string;
}

const DELIVERY_TABS: DeliveryTab[] = [
  {
    id: 'idea',
    label: 'Idea',
    description:
      'Every engagement starts with a focused discovery process that aligns business goals, user needs, and technical feasibility.',
  },
  {
    id: 'build',
    label: 'Build',
    description:
      'Agile engineering sprints using battle-tested AI patterns, modular architecture, and continuous integration pipelines.',
  },
  {
    id: 'ship',
    label: 'Ship',
    description:
      'Production deployment with automated testing, observability dashboards, and enterprise SLA performance monitoring.',
  },
];

const { width } = Dimensions.get('window');

export const ProductEngineeringSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<'idea' | 'build' | 'ship'>('idea');

  const activeTab =
    DELIVERY_TABS.find((t) => t.id === activeTabId) || DELIVERY_TABS[0];

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <LinearGradient
          colors={['#EF5DA8', '#6C4DE6']}
          style={styles.accentBar}
        />
        <Text style={styles.mainTitle}>
          Product Engineering That Moves at the Speed of AI
        </Text>
      </View>

      <View style={styles.infoGroup}>
        <View style={styles.infoBlock}>
          <Text style={styles.infoHeading}>What we do</Text>
          <Text style={styles.infoBody}>
            We design and build AI-enabled products, platforms, and workflows that help organizations automate decisions, improve operations, and create smarter customer experiences.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoHeading}>How we do</Text>
          <Text style={styles.infoBody}>
            We combine AI strategy, data engineering, automation, and product delivery to turn business goals into practical systems your teams can use and scale.
          </Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.infoHeading}>Why trust us</Text>
          <Text style={styles.infoBody}>
            Our engineering leaders bring deep delivery experience across cloud, data, and AI transformation, helping businesses move from experimentation to measurable impact.
          </Text>
        </View>
      </View>

      <View style={styles.visualContainer}>
        <LinearGradient
          colors={['#6538E6', '#9053F6', '#E6007A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.velocityBadge}
        >
          <Text style={styles.velocitySubtext}>Delivery velocity</Text>
          <Text style={styles.velocityStat}>+48%</Text>
          <Text style={styles.velocityFoot}>Faster product decisions</Text>
        </LinearGradient>

        <View style={styles.imageCard}>
          <Image
            source={require('../../assets/images/pexels-bertellifotografia-13870890 1.png')}
            style={styles.teamImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.deliveryCard}>
          <Text style={styles.deliveryCardTitle}>Delivery loop</Text>

          <View style={styles.tabsRow}>
            {DELIVERY_TABS.map((tab) => {
              const isSelected = tab.id === activeTabId;
              return (
                <TouchableOpacity
                  key={tab.id}
                  activeOpacity={0.7}
                  onPress={() => setActiveTabId(tab.id)}
                  style={styles.tabBtnTouch}
                >
                  {isSelected ? (
                    <LinearGradient
                      colors={['#6538E6', '#9053F6', '#E6007A']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.tabBtnActive}
                    >
                      <Text style={styles.tabBtnTextActive}>{tab.label}</Text>
                    </LinearGradient>
                  ) : (
                    <View style={styles.tabBtnInactive}>
                      <Text style={styles.tabBtnTextInactive}>{tab.label}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.tabDescription}>{activeTab.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEBFF',
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
  },
  accentBar: {
    width: 4,
    borderRadius: 2,
  },
  mainTitle: {
    fontFamily: Fonts.bold,
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: '#13153F',
    lineHeight: 30,
  },
  infoGroup: {
    gap: 16,
  },
  infoBlock: {
    gap: 4,
  },
  infoHeading: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    fontWeight: '600',
    color: '#13153F',
  },
  infoBody: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    color: '#625B67',
    lineHeight: 21,
  },
  visualContainer: {
    marginTop: 8,
    gap: 16,
  },
  velocityBadge: {
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#6538E6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  velocitySubtext: {
    fontFamily: Fonts.regular,
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
  },
  velocityStat: {
    fontFamily: Fonts.extraBold,
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginVertical: 2,
  },
  velocityFoot: {
    fontFamily: Fonts.regular,
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
  },
  imageCard: {
    borderRadius: 20,
    overflow: 'hidden',
    height: 200,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  teamImage: {
    width: '100%',
    height: '100%',
  },
  deliveryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    gap: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  deliveryCardTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 15,
    fontWeight: '600',
    color: '#13153F',
  },
  tabsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  tabBtnTouch: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  tabBtnActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabBtnTextActive: {
    fontFamily: Fonts.semiBold,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  tabBtnInactive: {
    backgroundColor: '#EBEBF8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  tabBtnTextInactive: {
    fontFamily: Fonts.semiBold,
    color: '#13153F',
    fontSize: 13,
    fontWeight: '600',
  },
  tabDescription: {
    fontFamily: Fonts.regular,
    fontSize: 12.5,
    color: '#625B67',
    lineHeight: 18,
  },
});

