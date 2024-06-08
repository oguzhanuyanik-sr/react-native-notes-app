import React from 'react';
import SearchInput from '../components/SearchInput';
import { View } from 'react-native';
import NoteList from '../components/NoteList';
import AddButton from '../components/AddButton';

export default function HomeScreen() {
  return (
    <View className='flex-1'>
      <SearchInput />
      <NoteList />
      <AddButton />
    </View>
  );
}
