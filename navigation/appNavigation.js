import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';
import AddScreen from '../screens/AddScreen';
import ProfileAvatar from '../components/ProfileAvatar';
import FilterButton from '../components/FilterButton';
import SaveButton from '../components/SaveButton';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          options={{
            headerTitle: 'Notes App',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 22, fontWeight: '800' },
            headerLeft: ProfileAvatar,
            headerRight: FilterButton,
          }}
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Add'
          component={AddScreen}
          options={{
            headerTitle: 'Add New Note',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 22, fontWeight: '800' },
            headerRight: SaveButton
          }}
        />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
