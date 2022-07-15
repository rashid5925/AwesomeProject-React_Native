import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UselessTextInput, Add_task } from "./code/mainscreen";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <UselessTextInput />
      <Add_task
        //onPress={() => {
        //navigation.navigate('Details')
        //}}
        title="Add Task"
      />
    </View>
  );
}

// function SecondScreen() {
//   return (
//     <View>
//       <Text>Hello World!!!</Text>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "To Do List",
            headerStyle: {
              backgroundColor: "#1c96c5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={HomeScreen}
        />
        {/* <Stack.Screen name="Details" component={SecondScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
  },
});
