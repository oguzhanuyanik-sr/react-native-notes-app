import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { PlusIcon } from 'react-native-heroicons/outline';

export default function AddButton() {
  return (
    <TouchableOpacity className='absolute bottom-8 right-8 h-16 w-16 bg-white rounded-full justify-center items-center shadow-2xl border border-black/10'>
      <PlusIcon color={'black'} size={30} />
    </TouchableOpacity>
  );
}
