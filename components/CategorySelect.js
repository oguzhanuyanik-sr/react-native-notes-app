import { ScrollView } from 'react-native';
import React from 'react';
import { categories } from '../constants/data';
import CategoryBadge from './CategoryBadge';

export default function CategorySelect({ activeCategory, setActiveCategory }) {
  return (
    <ScrollView
      className='py-3 mx-4 mt-4'
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map(({ category, color }, index) => (
        <CategoryBadge
          key={'category-badge-' + index}
          title={category}
          color={color}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </ScrollView>
  );
}
