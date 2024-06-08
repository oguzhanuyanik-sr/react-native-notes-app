import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function InputWithLabel({
  label,
  value,
  setValue,
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = 'center',
}) {
  return (
    <View className={'mt-3'}>
      <View
        style={{
          shadowColor: '#171717',
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.6,
          shadowRadius: 3,
        }}
        className='z-10 ml-8 -mb-2 rounded-md px-2 bg-white self-start shadow-sm'
      >
        <Text className='text-xl text-gray-500'>{label}</Text>
      </View>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical={textAlignVertical}
        className={'bg-white rounded-md px-6 py-4 mx-4 border border-gray-300'}
        value={value}
        onChangeText={(val) => setValue(val)}
      />
    </View>
  );
}
