import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Feather } from '@expo/vector-icons';

export default function CommunitiesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Communities</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={18} color="grey" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search communities"
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

      <CommunitiesSection />

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Stay connected with a community — a place to connect with people who share your interests.
        </Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start your community</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sampleCommunitiesContainer}>
        <Text style={styles.sampleHeader}>Sample Communities</Text>
        
        <TouchableOpacity style={styles.communityItem}>
          <View style={[styles.communityAvatar, { backgroundColor: '#4CAF50' }]}>
            <Text style={styles.communityAvatarText}>🌱</Text>
          </View>
          <View style={styles.communityContent}>
            <Text style={styles.communityName}>Eco Warriors</Text>
            <Text style={styles.communityDescription}>Environmental sustainability and green living</Text>
            <Text style={styles.communityMembers}>2.3k members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.communityItem}>
          <View style={[styles.communityAvatar, { backgroundColor: '#FF9800' }]}>
            <Text style={styles.communityAvatarText}>📚</Text>
          </View>
          <View style={styles.communityContent}>
            <Text style={styles.communityName}>Book Club Central</Text>
            <Text style={styles.communityDescription}>Discuss latest reads and literary discoveries</Text>
            <Text style={styles.communityMembers}>1.8k members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.communityItem}>
          <View style={[styles.communityAvatar, { backgroundColor: '#2196F3' }]}>
            <Text style={styles.communityAvatarText}>💻</Text>
          </View>
          <View style={styles.communityContent}>
            <Text style={styles.communityName}>Tech Innovators</Text>
            <Text style={styles.communityDescription}>Latest tech trends and startup discussions</Text>
            <Text style={styles.communityMembers}>4.1k members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.communityItem}>
          <View style={[styles.communityAvatar, { backgroundColor: '#E91E63' }]}>
            <Text style={styles.communityAvatarText}>🍳</Text>
          </View>
          <View style={styles.communityContent}>
            <Text style={styles.communityName}>Cooking Enthusiasts</Text>
            <Text style={styles.communityDescription}>Share recipes and cooking tips</Text>
            <Text style={styles.communityMembers}>3.2k members</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const CommunitiesSection: React.FC = () => {
  return (
    <TouchableOpacity style={styles.communitiesSection}>
      <View style={styles.communitiesImageContainer}>
        <View style={styles.communitiesImage}>
          <Feather name="users" size={30} color="#25D366" />
        </View>
      </View>
      <View style={styles.communitiesInfo}>
        <Text style={styles.communitiesName}>New Community</Text>
        <Text style={styles.communitiesStatus}>Create a community for your contacts</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#8E8E93" />
    </TouchableOpacity>
  );
};

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
  communitiesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  communitiesImageContainer: {
    marginRight: 16,
  },
  communitiesImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  communitiesInfo: {
    flex: 1,
  },
  communitiesName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  communitiesStatus: {
    fontSize: 14,
    color: '#8E8E93',
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: '#075E54',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sampleCommunitiesContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  sampleHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  communityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  communityAvatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  communityAvatarText: {
    fontSize: 20,
  },
  communityContent: {
    flex: 1,
  },
  communityName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  communityDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 2,
  },
  communityMembers: {
    fontSize: 13,
    color: '#075E54',
    fontWeight: '500',
  },
});
