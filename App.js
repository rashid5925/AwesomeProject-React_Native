import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import {UselessTextInput, Add_task} from './code/mainscreen';


function onClickButton() {
  navigation.navigate("Details")
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <UselessTextInput/>
      <Add_task onPress={() => {
        navigation.navigate('Details')
      }} title="Add Task" />
    </View>
  );
}

function SecondScreen() {
  return (
    <View>
      <Text>Hello World!!!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
