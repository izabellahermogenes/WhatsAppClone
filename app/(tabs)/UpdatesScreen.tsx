import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Feather } from '@expo/vector-icons';

export default function UpdatesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Updates</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="grey" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.statusSection}>
        <Text style={styles.sectionHeader}>Status</Text>
        
        <TouchableOpacity style={styles.statusItem}>
          <View style={styles.myStatusAvatar}>
            <Text style={styles.addStatusText}>+</Text>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.statusName}>Add status</Text>
            <Text style={styles.statusSubtext}>Dissappears after 24 hours</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.channelsSection}>
        <View style={styles.channelsHeader}>
          <Text style={styles.sectionHeader}>Channels</Text>
          <TouchableOpacity>
            <Text style={styles.findChannelsButton}>Find channels</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.channelItem}>
          <View style={styles.channelAvatar}>
            <Text style={styles.channelAvatarText}>T</Text>
          </View>
          <View style={styles.channelContent}>
            <View style={styles.channelHeader}>
              <Text style={styles.channelName}>Tech News</Text>
              <Text style={styles.verifiedIcon}>✓</Text>
            </View>
            <Text style={styles.channelMessage}>Latest updates in technology and innovation</Text>
            <Text style={styles.channelTime}>2 hours ago</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.channelItem}>
          <View style={[styles.channelAvatar, styles.newsAvatar]}>
            <Text style={styles.channelAvatarText}>W</Text>
          </View>
          <View style={styles.channelContent}>
            <View style={styles.channelHeader}>
              <Text style={styles.channelName}>World News</Text>
              <Text style={styles.verifiedIcon}>✓</Text>
            </View>
            <Text style={styles.channelMessage}>Breaking: Global climate summit reaches historic agreement</Text>
            <Text style={styles.channelTime}>4 hours ago</Text>
          </View>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.channelItem}>
          <View style={[styles.channelAvatar, styles.sportsAvatar]}>
            <Text style={styles.channelAvatarText}>S</Text>
          </View>
          <View style={styles.channelContent}>
            <View style={styles.channelHeader}>
              <Text style={styles.channelName}>Sports Central</Text>
              <Text style={styles.verifiedIcon}>✓</Text>
            </View>
            <Text style={styles.channelMessage}>Champions League final results and highlights</Text>
            <Text style={styles.channelTime}>6 hours ago</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 36,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 0,
  },
  clearIcon: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  statusSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  channelsSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  channelsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  findChannelsButton: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
  },
  subHeader: {
    paddingVertical: 8,
    marginTop: 12,
  },
  subHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#8E8E93',
    letterSpacing: 0.5,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  myStatusAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#075E54',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statusAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 2.5,
  },
  unviewedStatus: {
    backgroundColor: '#007AFF',
    borderColor: '#25D366',
  },
  viewedStatus: {
    backgroundColor: '#8E8E93',
    borderColor: '#D1D1D6',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statusContent: {
    flex: 1,
  },
  statusName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  statusSubtext: {
    fontSize: 14,
    color: '#8E8E93',
  },
  statusTime: {
    fontSize: 14,
    color: '#8E8E93',
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  channelAvatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  newsAvatar: {
    backgroundColor: '#FF3B30',
  },
  sportsAvatar: {
    backgroundColor: '#FF9500',
  },
  channelAvatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  channelContent: {
    flex: 1,
    paddingRight: 8,
  },
  channelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  channelName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginRight: 4,
  },
  verifiedIcon: {
    fontSize: 12,
    color: '#25D366',
    fontWeight: 'bold',
  },
  channelMessage: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
    lineHeight: 18,
  },
  channelTime: {
    fontSize: 13,
    color: '#8E8E93',
  },
  unreadBadge: {
    backgroundColor: '#075E54',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});