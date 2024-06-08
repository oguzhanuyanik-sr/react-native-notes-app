import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={(val) => setSearchQuery(val)}
        placeholder='Search note..'
        className='bg-white rounded-full px-6 py-4 mt-3 mx-10 border border-gray-300'
        autoCapitalize='none'
      />
    </View>
  );
}
