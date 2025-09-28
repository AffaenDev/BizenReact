import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';

interface RegionSelectorProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionSelector = ({ selectedRegion, onRegionChange }: RegionSelectorProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  
  const regions = [
    { id: 'all', name: 'All' },
    { id: 'usa', name: t('regions.usa') },
    { id: 'europe', name: t('regions.europe') },
    { id: 'asia', name: t('regions.asia') },
  ];
  
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {regions.map(region => (
        <TouchableOpacity
          key={region.id}
          style={[
            styles.regionButton,
            { 
              backgroundColor: selectedRegion === region.id ? colors.primary : 'transparent',
              borderColor: colors.border,
            }
          ]}
          onPress={() => onRegionChange(region.id)}
        >
          <Text
            style={[
              styles.regionText,
              { color: selectedRegion === region.id ? '#fff' : colors.text }
            ]}
          >
            {region.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  regionButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  regionText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RegionSelector;