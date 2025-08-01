import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from '@/components/ChatListItem/style';
import ChatRoom  from "@/data/ChatRooms";
import moment from 'moment';

interface ChatListItemProps {
  avatar?: string;
  username: string;
  lastMessage: string;
  time: string;
  onPress?: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  avatar,
  username,
  lastMessage,
  time,
  onPress
}) => {

  const onClick = () => {
    navigation.navigate('ChatRoom', { id: ChatRoom.id })
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarInitial}>
              {username ? username.charAt(0).toUpperCase() : '?'}
            </Text>
          </View>
        )}
        <View style={styles.midContainer}>
          <Text style={styles.username}>{username || 'Unknown'}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {lastMessage || 'No message'}
          </Text>
        </View>
      </View>
      <Text style={styles.time}>
        {moment(time).format("DD/MM/YY")}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatListItem;