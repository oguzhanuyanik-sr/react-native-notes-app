import { View, Image } from 'react-native';
import React from 'react';

export default function ProfileAvatar() {
  return (
    <View className='h-11 w-11 rounded-full overflow-hidden shadow-xl'>
      <Image
        className='h-full w-full'
        source={require('../assets/images/avatar.jpg')}
      />
    </View>
  );
}
