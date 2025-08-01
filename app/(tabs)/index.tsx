import { StyleSheet, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { View } from '@/components/Themed';
import { MaterialIcons, Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import 'react-native-reanimated';
import ChatListItem from '@/components/ChatListItem';
import ChatRooms from '@/data/ChatRooms';
import { ChatRoom } from '@/types';

import UpdatesScreen from './UpdatesScreen';
import CallsScreen from './CallsScreen';
import CommunitiesScreen from './CommunitiesScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

function ChatsScreen() {
    const router = useRouter();
    
    console.log('=== ChatsScreen Debug ===');
    console.log('ChatRooms:', ChatRooms);
    console.log('ChatRooms length:', ChatRooms?.length);
    console.log('First chat room:', ChatRooms[0]);
    
    return (
      <View style={[styles.container, { backgroundColor: '#fff' }]}>
        <FlatList
          data={ChatRooms}
          renderItem={({ item }: { item: ChatRoom }) => {
            console.log('=== Rendering Item ===');
            console.log('Item:', item);
            console.log('Item users:', item.users);
            
            const otherUser = item.users.find(user => user.id !== 'u1') || item.users[0];
            console.log('Other user found:', otherUser);
            console.log('Other user name:', otherUser?.name);
            
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <ChatListItem 
                    avatar={otherUser?.imageUri}
                    username={otherUser?.name || "Unknown"}
                    lastMessage={item.lastMessage.content}
                    time={item.lastMessage.createdAt}
                    onPress={() => {
                      console.log('Pressed chat:', otherUser?.name);
                      console.log('Navigating to chat with ID:', item.id);
                      
                      try {
                        router.push({
                          pathname: '/(tabs)/ChatRoomScreen',
                          params: {
                            chatRoomId: item.id,
                            chatRoomName: otherUser?.name || "Unknown",
                          }
                        });
                        
                      } catch (error) {
                        console.error('Navigation error:', error);
                        try {

                          router.push({
                            pathname: '/(tabs)/ChatRoomScreen',
                            params: {
                              chatRoomId: item.id,
                              chatRoomName: otherUser?.name || "Unknown",
                            }
                          });
                        } catch (fallbackError) {
                          console.error('Second attempt failed:', fallbackError);
                          
                          router.push({
                            pathname: '/ChatRoomScreen',
                            params: {
                              chatRoomId: item.id,
                              chatRoomName: otherUser?.name || "Unknown",
                            }
                          });
                        }
                      }
                    }}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#075454',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default function TabOneScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'WhatsApp',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerRight: () => (
            <>
              <Feather 
                name="camera" 
                size={22} 
                color="white" 
                style={{ marginRight: 20 }}
              />
              <AntDesign 
                name="pluscircle" 
                size={22} 
                color="white" 
                style={{ marginRight: 15 }}
              />
            </>
          ),
        }}
      />

      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Updates') {
                return <Feather name="refresh-cw" size={size} color={color} />;
              } else if (route.name === 'Calls') {
                return <Feather name="phone" size={size} color={color} />;
              } else if (route.name === 'Communities') {
                return <MaterialIcons name="groups" size={33} color={color} />;
              } else if (route.name === 'Chats') {
                return <Ionicons name="chatbubbles-outline" size={27} color={color} />;
              } else if (route.name === 'Settings') {
                return <Feather name="settings" size={size} color={color} />;
              }
            },
            tabBarActiveTintColor: '#075E54',
            tabBarInactiveTintColor: '#888',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 1,
              borderTopColor: '#e0e0e0',
              height: 90,
              paddingBottom: 25,
              paddingTop: 10,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
              marginBottom: 5,
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Updates" component={UpdatesScreen} />
          <Tab.Screen name="Calls" component={CallsScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Communities" component={CommunitiesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </>
  );
}