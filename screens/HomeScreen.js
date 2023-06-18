import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Task from '../components/Task';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Pressable style={styles.button} onPress={() => navigation.navigate("To-Do")}>
        <Text style={styles.text}>To-Do List</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC3F2',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#CC57B2'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
