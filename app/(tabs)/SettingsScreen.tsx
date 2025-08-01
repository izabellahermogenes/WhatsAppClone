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
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  showArrow?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, title, onPress, showArrow = true }) => {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingContent}>
        <View style={styles.settingIcon}>{icon}</View>
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
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
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
            <Feather name="search" size={18} color="grey"/>
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
            icon={<MaterialCommunityIcons name="account-box-multiple-outline" size={24} color="outline" />}
            title="Lists"
            onPress={() => console.log('Account pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="bullhorn-outline" size={24} color="black" />}
            title="Broadcast messages"
            onPress={() => console.log('Broadcast pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="star-outline" size={24} color="black" />}
            title="Starred"
            onPress={() => console.log('Starred pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="laptop" size={24} color="black" />}
            title="Linked devices"
            onPress={() => console.log('Linked devices pressed')}
          />
        </View>

        <View style={styles.section}>
          <SettingsItem
            icon={<MaterialCommunityIcons name="key-variant" size={24} color="black" />}
            title="Account"
            onPress={() => console.log('Account pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="lock-outline" size={24} color="black" />}
            title="Privacy"
            onPress={() => console.log('Privacy pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="chat-outline" size={24} color="black" />}
            title="Chats"
            onPress={() => console.log('Chats pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="bell-outline" size={24} color="black" />}
            title="Notifications"
            onPress={() => console.log('Notifications pressed')}
          />
          <SettingsItem
            icon={<MaterialCommunityIcons name="chart-arc" size={24} color="black" />}
            title="Storage and data"
            onPress={() => console.log('Storage pressed')}
          />
        </View>

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
    backgroundColor: '#0000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 8
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
    marginRight: 16,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
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