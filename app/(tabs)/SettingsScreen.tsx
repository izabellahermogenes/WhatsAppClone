import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';

interface SettingsItemProps {
  icon: string;
  title: string;
  onPress: () => void;
  showArrow?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, title, onPress, showArrow = true }) => {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingContent}>
        <Text style={styles.settingIcon}>{icon}</Text>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      {showArrow && <Text style={styles.arrow}>›</Text>}
    </TouchableOpacity>
  );
};

const ProfileSection: React.FC = () => {
  return (
    <TouchableOpacity style={styles.profileSection}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/60' }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Iza</Text>
        <Text style={styles.profileStatus}>Available</Text>
      </View>
      <View style={styles.qrCode}>
        <Text style={styles.qrIcon}>⬛</Text>
      </View>
    </TouchableOpacity>
  );
};

const SettingsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        <ProfileSection />

        <View style={styles.section}>
          <SettingsItem
            icon="👤"
            title="Avatar"
            onPress={() => console.log('Avatar pressed')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon="📋"
            title="Lists"
            onPress={() => console.log('Lists pressed')}
          />
          <SettingsItem
            icon="📢"
            title="Broadcast messages"
            onPress={() => console.log('Broadcast pressed')}
          />
          <SettingsItem
            icon="⭐"
            title="Starred"
            onPress={() => console.log('Starred pressed')}
          />
          <SettingsItem
            icon="💻"
            title="Linked devices"
            onPress={() => console.log('Linked devices pressed')}
          />
        </View>

        {/* Third Section */}
        <View style={styles.section}>
          <SettingsItem
            icon="🔑"
            title="Account"
            onPress={() => console.log('Account pressed')}
          />
          <SettingsItem
            icon="🔒"
            title="Privacy"
            onPress={() => console.log('Privacy pressed')}
          />
          <SettingsItem
            icon="💬"
            title="Chats"
            onPress={() => console.log('Chats pressed')}
          />
          <SettingsItem
            icon="🔔"
            title="Notifications"
            onPress={() => console.log('Notifications pressed')}
          />
          <SettingsItem
            icon="📊"
            title="Storage and data"
            onPress={() => console.log('Storage pressed')}
          />
        </View>

        {/* Bottom padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  profileStatus: {
    fontSize: 14,
    color: '#666',
  },
  qrCode: {
    padding: 8,
  },
  qrIcon: {
    fontSize: 20,
    color: '#000',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 18,
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  arrow: {
    fontSize: 16,
    color: '#c7c7cc',
    marginLeft: 10,
  },
  bottomPadding: {
    height: 20,
  },
});

export default SettingsScreen;