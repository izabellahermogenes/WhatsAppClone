import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { MaterialCommunityIcons, Octicons, Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import 'react-native-reanimated';

// Import your separate screen components
import UpdatesScreen from './UpdatesScreen';
import CallsScreen from './CallsScreen';
import CommunitiesScreen from './CommunitiesScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

// This is your Chats Screen (main screen)
function ChatsScreen() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabText}>Chats</Text>
      {/* Add your chat list here */}
      <Text style={styles.subtitle}>Your chat conversations will appear here</Text>
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
            <View 
              style={{
                flexDirection: 'row', 
                width: 60, 
                justifyContent: 'space-between', 
                marginRight: 10 
              }}
              lightColor="transparent"
              darkColor="transparent"
            >
              <Feather name="camera" size={22} color="white" />
              <AntDesign name="pluscircle" size={22} color="white" />
            </View>
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
                return <Feather name="users" size={size} color={color} />;
              } else if (route.name === 'Chats') {
                return <Feather name="message-circle" size={size} color={color} />;
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
          <Tab.Screen name="Communities" component={CommunitiesScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </>
  );
}