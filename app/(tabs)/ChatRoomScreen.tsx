import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import chatRoomData from '@/data/Chats';
import ChatMessage from '@/components/ChatMessage';
import { Message } from '@/types';
import { useRoute } from '@react-navigation/native';
import BG from '@/assets/images/BG.png';

const ChatRoomScreen = () => {

  const route = useRoute();

  //console.log(route.params)

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
    <FlatList
    data={chatRoomData.messages}
    renderItem={({ item }) => <ChatMessage message={item} />}
    />
    </ImageBackground>

  );
}

export default ChatRoomScreen;

