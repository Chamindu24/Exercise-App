import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function _layout() {
  
    return (
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='exercises' options={{presentation:'fullScreenModel'}} />
        <Stack.Screen name='exerciseDetails' options={{presentation:'model'}} />
      </Stack>
    )
  
}
