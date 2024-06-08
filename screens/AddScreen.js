import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel';
import CategorySelect from '../components/CategorySelect';
import { categories } from '../constants/data';
import SaveButton from '../components/SaveButton';

export default function AddScreen() {
  const [titleVal, setTitleVal] = useState('');
  const [descVal, setDescVal] = useState('');
  const [activeCategory, setActiveCategory] = useState(categories[0].category);

  return (
    <View>
      <View>
        <InputWithLabel label='Title' value={titleVal} setValue={setTitleVal} />
        <InputWithLabel
          label='Description'
          value={descVal}
          setValue={setDescVal}
          multiline={true}
          numberOfLines={10}
          textAlignVertical={'top'}
        />
      </View>
      <CategorySelect
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <View className='flex-row justify-center mx-4'>
        <TouchableOpacity className='flex-row justify-center items-center space-x-3 mt-8 bg-green-300 py-3 w-full rounded-md'>
          <SaveButton color='white' />
          <Text className='text-white text-xl font-semibold'>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
