import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreeen from './screens/AllExpensesScreen';
import ExpensesOverviewScreen from './screens/ExpensesOverviewScreen';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
  <BottomTabs.Navigator screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.color.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.color.primary500,
    tabBarActiveTintColor: GlobalStyles.color.accent500 }
  }}>
    <BottomTabs.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{
      title: 'Recent Expenses',
      tabBarLabel: 'Recent',
      tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />
    }} />
    <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreeen} options={{
      title: 'All Expenses',
      tabBarLabel: 'RecAll Expenses',
      tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
    }} />
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name="ExpensesOverView" 
          component={ExpensesOverview} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
