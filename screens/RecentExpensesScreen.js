import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function RecentExpensesScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.textContent}>RecentExpensesScreen!</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      
  },
  textContent: {
      justifyContent: 'center',
      textAlign: 'center'
  }
});

export default RecentExpensesScreen;
