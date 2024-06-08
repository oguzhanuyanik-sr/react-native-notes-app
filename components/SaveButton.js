import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CheckCircleIcon } from 'react-native-heroicons/outline';

export default function SaveButton({ color = 'black' }) {
  return (
    <TouchableOpacity>
      <CheckCircleIcon color={color} size={30} />
    </TouchableOpacity>
  );
}
