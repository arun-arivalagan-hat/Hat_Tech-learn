import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts } from '../constants/fonts';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  colors: readonly [string, string, ...string[]];
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    title: 'Enterprise-Grade Security & Compliance',
    description:
      'ISO 27001 security standards integrated into engineering and delivery practices.',
    colors: ['#EC3F62', '#9053F6', '#6B46FE'],
  },
  {
    id: 2,
    title: 'AI-First Product & Platform Thinking',
    description:
      'AI capabilities are embedded directly into system architecture and product design from the start.',
    colors: ['#6C4DE6', '#8B5CF6', '#EF5DA8'],
  },
  {
    id: 3,
    title: 'Scalable Modern Data Architecture',
    description:
      'High-throughput data platforms built for real-time analytics, governance, and enterprise LLM workloads.',
    colors: ['#7C5CFC', '#BA66FF', '#F52B71'],
  },
  {
    id: 4,
    title: 'Agile & High-Velocity Execution',
    description:
      'Cross-functional pod delivery model driving 48%+ faster product decisions and production deployments.',
    colors: ['#6538E6', '#9053F6', '#E6007A'],
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const activeCard = FEATURE_CARDS[activeCardIndex];

  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.title}>
          Why Global Enterprises Choose HashAgile
        </Text>
        <Text style={styles.subtitle}>
          Expertise Across Modern Tech Stacks for Scalable & Efficient Solutions
        </Text>
      </View>

      <LinearGradient
        colors={activeCard.colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{activeCard.title}</Text>
          <Text style={styles.cardDesc}>{activeCard.description}</Text>
        </View>

        <View style={styles.dotsRow}>
          {FEATURE_CARDS.map((card, idx) => {
            const isSelected = idx === activeCardIndex;
            return (
              <TouchableOpacity
                key={card.id}
                onPress={() => setActiveCardIndex(idx)}
                activeOpacity={0.7}
                style={[
                  styles.dot,
                  isSelected ? styles.dotActive : styles.dotInactive,
                ]}
              />
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 20,
  },
  headerBlock: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 25,
    fontWeight: '700',
    color: '#13153F',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#625B67',
    textAlign: 'center',
    lineHeight: 20,
  },
  cardGradient: {
    borderRadius: 24,
    padding: 24,
    minHeight: 200,
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#6B46FE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  cardContent: {
    gap: 10,
  },
  cardTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 28,
  },
  cardDesc: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 21,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#FFFFFF',
  },
  dotInactive: {
    width: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

