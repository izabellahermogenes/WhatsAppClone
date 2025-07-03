import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '@/components/ChatListItem/style';
import ChatRooms from '@/data/ChatRooms';
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
        {moment(ChatRooms[0].lastMessage.createdAt).format("DD/MM/YY")}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatListItem;