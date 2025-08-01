import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function CallsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calls</Text>
      </View>

      <View style={styles.favoritesSection}>
        <TouchableOpacity style={styles.addFavoriteItem}>
          <View style={styles.addFavoriteIcon}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
          <Text style={styles.addFavoriteText}>Add favorite</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.recentsSection}>
        <Text style={styles.sectionHeader}>Recent</Text>


        <TouchableOpacity style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.contactName}>Mom</Text>
            <View style={styles.callDetails}>
              <Text style={styles.callDirection}>↙</Text>
              <Text style={styles.missedCallText}>Missed</Text>
            </View>
          </View>
          <View style={styles.callActions}>
            <Text style={styles.callTime}>2:45 PM</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>L</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.contactName}>Lukas</Text>
            <View style={styles.callDetails}>
              <Text style={styles.outgoingDirection}>↗</Text>
              <Text style={styles.regularCallText}>Outgoing</Text>
            </View>
          </View>
          <View style={styles.callActions}>
            <Text style={styles.callTime}>1:30 PM</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>D</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.contactName}>Daniel</Text>
            <View style={styles.callDetails}>
              <Text style={styles.incomingDirection}>↙</Text>
              <Text style={styles.regularCallText}>Incoming</Text>
            </View>
          </View>
          <View style={styles.callActions}>
            <Text style={styles.callTime}>Yesterday</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.contactName}>Adrian</Text>
            <View style={styles.callDetails}>
              <Text style={styles.outgoingDirection}>↗</Text>
              <Text style={styles.regularCallText}>Outgoing video call</Text>
            </View>
          </View>
          <View style={styles.callActions}>
            <Text style={styles.callTime}>Yesterday</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>B</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.contactName}>Bob</Text>
            <View style={styles.callDetails}>
              <Text style={styles.callDirection}>↙</Text>
              <Text style={styles.missedCallText}>Missed (3)</Text>
            </View>
          </View>
          <View style={styles.callActions}>
            <Text style={styles.callTime}>2 days ago</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callItem}>
          <View style={[styles.avatar, styles.groupAvatar]}>
            <Text style={styles.avatarText}>F</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.contactName}>Fam</Text>
            <View style={styles.callDetails}>
              <Text style={styles.incomingDirection}>↙</Text>
              <Text style={styles.regularCallText}>Incoming group call</Text>
            </View>
          </View>
          <View style={styles.callActions}>
            <Text style={styles.callTime}>3 days ago</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  favoritesSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  addFavoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addFavoriteIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#075E54',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  plusIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addFavoriteText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  recentsSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  groupAvatar: {
    backgroundColor: '#075E54',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  callInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callDirection: {
    fontSize: 16,
    color: '#FF3B30',
    marginRight: 4,
    fontWeight: 'bold',
  },
  outgoingDirection: {
    fontSize: 16,
    color: '#8E8E93',
    marginRight: 4,
    fontWeight: 'bold',
  },
  incomingDirection: {
    fontSize: 16,
    color: '#8E8E93',
    marginRight: 4,
    fontWeight: 'bold',
  },
  missedCallText: {
    fontSize: 14,
    color: '#FF3B30',
  },
  regularCallText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  callActions: {
    alignItems: 'flex-end',
  },
  callTime: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  infoButton: {
    padding: 4,
  },
  infoIcon: {
    fontSize: 16,
    color: '#007AFF',
  },
});
