import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Platform } from 'react-native';
import { Navbar } from '../components/Navbar';
// import { HeroSection } from '../components/HeroSection';
// import { ServicesSection } from '../components/ServicesSection';
// import { ProductEngineeringSection } from '../components/ProductEngineeringSection';
// import { TrustSection } from '../components/TrustSection';
// import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
// import { CtaFooterSection } from '../components/CtaFooterSection';

export default function IndexScreen() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const scrollViewRef = useRef<ScrollView>(null);

  const sectionPositions = useRef<{ [key: string]: number }>({}).current;

  const handleLayout = (sectionName: string, yPosition: number) => {
    sectionPositions[sectionName] = yPosition;
  };

  const scrollToSection = (name: string) => {
    setActiveTab(name);

    if (name === 'Home') {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    const y = sectionPositions[name];
    if (y !== undefined) {
      scrollViewRef.current?.scrollTo({ y: y - 10, animated: true });
    }
  };

  const handleScrollToTop = () => {
    setActiveTab('Home');
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <Navbar  activeTab={activeTab} onSelectNav={scrollToSection} />

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <View
          onLayout={(e) => handleLayout('Home', e.nativeEvent.layout.y)}
        >
          <HeroSection
            onContactPress={() => scrollToSection('Contact Us')}
          />
        </View> */}

        {/* <View
          onLayout={(e) => handleLayout('Insights', e.nativeEvent.layout.y)}
        >
          <TrustSection />
        </View>

        <View
          onLayout={(e) => handleLayout('Expertise', e.nativeEvent.layout.y)}
        >
          <ServicesSection />
        </View>

        <View
          onLayout={(e) => handleLayout('Company', e.nativeEvent.layout.y)}
        >
          <ProductEngineeringSection />
        </View>

      

        <View
          onLayout={(e) => handleLayout('Careers', e.nativeEvent.layout.y)}
        >
          <WhyChooseUsSection />
        </View>

        <View
          onLayout={(e) => handleLayout('Portfolio', e.nativeEvent.layout.y)}
        />

        <View
          onLayout={(e) => handleLayout('Contact Us', e.nativeEvent.layout.y)}
        >
          <CtaFooterSection
            onContactPress={() => scrollToSection('Contact Us')}
            onSelectNav={scrollToSection}
            onScrollToTop={handleScrollToTop}
          />
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 0,
  },
});