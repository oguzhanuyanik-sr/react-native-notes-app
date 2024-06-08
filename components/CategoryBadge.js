import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CategoryBadge({
  title,
  color,
  activeCategory,
  setActiveCategory,
}) {
  const activeColor = '#353b48';

  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(title)}
      style={{
        backgroundColor: activeCategory === title ? activeColor : color,
      }}
      className='self-start px-4 py-2 rounded-full mx-2'
    >
      <Text className='capitalize text-white text-lg'>{title}</Text>
    </TouchableOpacity>
  );
}
