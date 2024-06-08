import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { categories } from '../constants/data';
import { ChevronDoubleRightIcon } from 'react-native-heroicons/outline';
import ellipsis from '../utils/ellipsis';

export default function NoteCard({ item }) {
  const { id, title, desc, date, category } = item;

  const color = categories.find((item) => item.category === category).color;

  return (
    <TouchableOpacity
      style={{ backgroundColor: color }}
      className='w-[48%] rounded-2xl px-3 py-3 mb-4'
    >
      <View className='flex-row justify-between mb-3'>
        <Text className='capitalize bg-white px-2 py-1 rounded-lg shadow-xl'>
          {category}
        </Text>
        <Text className='text-white italic text-xs'>{date}</Text>
      </View>

      <View className='mb-3'>
        <Text className='text-gray-600 font-semibold capitalize text-xl text-center'>
          {title}
        </Text>
      </View>

      <View>
        <Text className='text-gray-600 text-justify'>{ellipsis(desc)}</Text>
      </View>

      <View className='-mt-2 flex-row justify-end'>
        <ChevronDoubleRightIcon size={25} color={'white'} />
      </View>
    </TouchableOpacity>
  );
}
