import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
  return (
    <View className='flex-row mx-2 gap-4 items-center justify-end'>
      <TouchableOpacity>
        <Octicons name="bell" size={22} color='black' />
      </TouchableOpacity>

      <TouchableOpacity className='rounded-full bg-gray-800 w-10 h-10 flex items-center justify-center'>
        <Text>TAB</Text>
      </TouchableOpacity>
    </View>
  );
}