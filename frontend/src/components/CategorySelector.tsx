import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'carSales', name: t('categories.carSales') },
    { id: 'truckSales', name: t('categories.truckSales') },
    { id: 'apartmentsSale', name: t('categories.apartmentsSale') },
    { id: 'apartmentsRent', name: t('categories.apartmentsRent') },
    { id: 'roomRent', name: t('categories.roomRent') },
    { id: 'furniture', name: t('categories.furniture') }
  ];
  
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            { 
              backgroundColor: selectedCategory === category.id ? colors.accent : 'transparent',
              borderColor: colors.border,
            }
          ]}
          onPress={() => onCategoryChange(category.id)}
        >
          <Text
            style={[
              styles.categoryText,
              { color: selectedCategory === category.id ? '#fff' : colors.text }
            ]}
          >
            {category.name}
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
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CategorySelector;