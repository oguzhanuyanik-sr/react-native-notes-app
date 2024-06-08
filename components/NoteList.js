import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { notes } from '../constants/data';
import NoteCard from './NoteCard';

export default function NoteList() {
  return (
    <FlatList
      data={notes}
      numColumns={2}
      style={{
        flex: 1,
      }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NoteCard item={item} />}
    />
  );
}
