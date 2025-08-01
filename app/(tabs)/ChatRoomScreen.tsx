import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
  Image,
  Keyboard,
} from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Message {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  type?: 'text' | 'image' | 'audio';
}

const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hey there! How are you doing?',
    createdAt: '2024-01-15T10:00:00Z',
    userId: 'u2',
  },
  {
    id: '2',
    content: 'I\'m doing great! Thanks for asking. How about you?',
    createdAt: '2024-01-15T10:01:00Z',
    userId: 'u1',
  },
  {
    id: '3',
    content: 'Pretty good! Just working on some React Native stuff.',
    createdAt: '2024-01-15T10:02:00Z',
    userId: 'u2',
  },
  {
    id: '4',
    content: 'Nice! React Native is awesome. What are you building?',
    createdAt: '2024-01-15T10:03:00Z',
    userId: 'u1',
  },
];

interface ChatBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

function ChatBubble({ message, isCurrentUser }: ChatBubbleProps) {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={[
      styles.messageBubble,
      isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble
    ]}>
      <Text style={[
        styles.messageText,
        isCurrentUser ? styles.currentUserText : styles.otherUserText
      ]}>
        {message.content}
      </Text>
      <Text style={[
        styles.messageTime,
        isCurrentUser ? styles.currentUserTime : styles.otherUserTime
      ]}>
        {formatTime(message.createdAt)}
      </Text>
    </View>
  );
}

export default function ChatRoomScreen() {
  const { chatRoomId, chatRoomName, profilePicture } = useLocalSearchParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputText, setInputText] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const textInputRef = useRef<TextInput>(null);

  console.log('ChatRoomScreen params:', { chatRoomId, chatRoomName, profilePicture });

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    });
    
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim().length === 0) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputText.trim(),
      createdAt: new Date().toISOString(),
      userId: 'u1',
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isCurrentUser = item.userId === 'u1';
    return (
      <View style={[
        styles.messageContainer,
        isCurrentUser ? styles.currentUserContainer : styles.otherUserContainer
      ]}>
        <ChatBubble message={item} isCurrentUser={isCurrentUser} />
      </View>
    );
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#075E54',
            },
            headerTintColor: '#fff',
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Image 
                  source={{ uri: profilePicture as string || 'https://via.placeholder.com/40' }}
                  style={styles.profilePicture}
                />
                <Text style={styles.headerTitle}>{chatRoomName as string || 'Chat'}</Text>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <TouchableOpacity style={styles.headerIcon}>
                  <Ionicons name="videocam-outline" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                  <Ionicons name="call-outline" size={20} color="white" />
                </TouchableOpacity>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => router.back()}
                style={styles.headerBackButton}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <KeyboardAvoidingView 
          style={styles.keyboardContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            style={styles.messagesList}
            contentContainerStyle={styles.messagesContent}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            scrollEnabled={true}
            bounces={true}
            alwaysBounceVertical={true}
          />

          {/* Updated Input Container to match WhatsApp design */}
          <View style={styles.inputContainer}>
            {/* Plus Button */}
            <TouchableOpacity style={styles.plusButton}>
              <Ionicons name="add" size={24} color="#54656F" />
            </TouchableOpacity>
            
            {/* Text Input Wrapper */}
            <TouchableOpacity 
              style={styles.inputWrapper}
              activeOpacity={1}
              onPress={() => textInputRef.current?.focus()}
            >
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Message"
                placeholderTextColor="#8C8C8C"
                multiline={true}
                maxLength={1000}
                returnKeyType="default"
                blurOnSubmit={false}
                textAlignVertical="center"
                onSubmitEditing={sendMessage}
                enablesReturnKeyAutomatically={true}
              />
            </TouchableOpacity>
            
            {/* Right Buttons Container */}
            <View style={styles.rightButtonsContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="camera-outline" size={22} color="#54656F" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={inputText.trim() ? sendMessage : () => textInputRef.current?.focus()}
              >
                <Ionicons 
                  name={inputText.trim() ? "send" : "mic-outline"}
                  size={20} 
                  color={inputText.trim() ? "#007AFF" : "#54656F"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  keyboardContainer: {
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerBackButton: {
    marginLeft: 1,
    padding: 5,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  headerRightContainer: {
    flexDirection: 'row',
    marginRight: 0,
    backgroundColor: 'transparent',
  },
  headerIcon: {
    marginLeft: 4,
    padding: 6,
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 5,
  },
  messagesContent: {
    paddingVertical: 5,
  },
  messageContainer: {
    marginVertical: 1,
    backgroundColor: 'transparent',
  },
  currentUserContainer: {
    alignItems: 'flex-end',
  },
  otherUserContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '75%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    marginHorizontal: 8,
    marginVertical: 1,
    backgroundColor: 'transparent',
  },
  currentUserBubble: {
    backgroundColor: '#DCF8C6',
    borderBottomRightRadius: 4,
  },
  otherUserBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  currentUserText: {
    color: '#000000',
  },
  otherUserText: {
    color: '#333',
  },
  messageTime: {
    fontSize: 11,
    marginTop: 4,
  },
  currentUserTime: {
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'right',
  },
  otherUserTime: {
    color: '#999',
  },
  // Updated Input Styles to match WhatsApp design exactly
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#F7F3E9',
    alignItems: 'flex-end',
  },
  plusButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    minHeight: 40,
    maxHeight: 100,
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  textInput: {
    fontSize: 16,
    color: '#000000',
    textAlignVertical: 'center',
    paddingVertical: 0,
    lineHeight: 20,
  },
  rightButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
});