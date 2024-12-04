import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
  return (
    <View className='flex-row gap-4 justify-end items-center relative top-2 right-2'>
      <TouchableOpacity>
        <Octicons name="bell" size={22} color='black' />
      </TouchableOpacity>

      <TouchableOpacity className='rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center'>
        <Text>TAB</Text>
      </TouchableOpacity>
    </View>
  );
}