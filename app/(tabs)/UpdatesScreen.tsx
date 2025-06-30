import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function UpdatesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Status</Text>
      </View>
      
      <View style={styles.myStatusContainer}>
        <View style={styles.statusItem}>
          <View style={styles.statusAvatar}>
            <Text style={styles.avatarText}>+</Text>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.statusName}>My status</Text>
            <Text style={styles.statusTime}>Tap to add status update</Text>
          </View>
        </View>
      </View>

      <View style={styles.recentUpdates}>
        <Text style={styles.sectionTitle}>Recent updates</Text>
        <View style={styles.statusItem}>
          <View style={[styles.statusAvatar, styles.hasStatus]}>
            <Text style={styles.avatarText}>J</Text>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.statusName}>John Doe</Text>
            <Text style={styles.statusTime}>2 minutes ago</Text>
          </View>
        </View>
        
        <View style={styles.statusItem}>
          <View style={[styles.statusAvatar, styles.hasStatus]}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.statusName}>Sarah Wilson</Text>
            <Text style={styles.statusTime}>1 hour ago</Text>
          </View>
        </View>
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
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#075E54',
  },
  myStatusContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  recentUpdates: {
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    paddingHorizontal: 16,
    paddingBottom: 8,
    textTransform: 'uppercase',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  statusAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  hasStatus: {
    borderWidth: 2,
    borderColor: '#075E54',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
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
  statusTime: {
    fontSize: 14,
    color: '#666',
  },
});