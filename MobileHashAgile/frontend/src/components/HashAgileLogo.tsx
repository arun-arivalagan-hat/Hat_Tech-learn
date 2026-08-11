import React from 'react';
import { View, Text, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Svg, { G, Line, Circle, Path } from 'react-native-svg';

interface HashAgileLogoProps {
  style?: StyleProp<ViewStyle>;
  isDarkBg?: boolean;
}

export const HashAgileLogo: React.FC<HashAgileLogoProps> = ({
  style,
  isDarkBg = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      {isDarkBg ? (
        <Svg width={42} height={42} viewBox="0 0 100 100" fill="none">
          <G stroke="white" strokeWidth="9" strokeLinecap="round">
            <Line x1="20" y1="36" x2="80" y2="36" />
            <Line x1="16" y1="64" x2="76" y2="64" />
            <Line x1="42" y1="16" x2="32" y2="84" />
            <Line x1="68" y1="16" x2="58" y2="84" />
          </G>
          <Circle cx="50" cy="50" r="16" stroke="white" strokeWidth="8" fill="none" />
          <Path d="M41 33 L49 31 L46 40 Z" fill="white" />
          <Path d="M59 67 L51 69 L54 60 Z" fill="white" />
        </Svg>
      ) : (
        <Image
          source={require('../../assets/images/hashagile_logo.jpeg')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      )}

      <View style={styles.textContainer}>
        <Text
          style={[
            styles.brandTitle,
            { color: isDarkBg ? '#FFFFFF' : '#111836' },
          ]}
        >
          HASH AGILE
        </Text>
        <View style={styles.taglineRow}>
          {'TECHNOLOGIES'.split('').map((char, index) => (
            <Text
              key={index}
              style={[
                styles.taglineChar,
                { color: isDarkBg ? '#FFFFFF' : '#111836' },
              ]}
            >
              {char}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoImage: {
    width: 42,
    height: 42,
  },
  textContainer: {
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  taglineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    width: 120,
  },
  taglineChar: {
    fontSize: 8.5,
    fontWeight: '400',
  },
});
