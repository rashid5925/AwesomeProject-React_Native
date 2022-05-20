import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-web';

function onClickButton() {
  alert("Hello")
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Image source={require("./assets/icon.png")} style={styles.img}></Image>
      <Button onPress={() => {
        onClickButton()
      }}
        title="Press me" color="deepskyblue"/>
      <TouchableOpacity onPress={() => {
        onClickButton()
      }} style={styles.touch}>
        <View style={styles.but}>
          <Text style={styles.butText}>Opacity</Text>
        </View>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  touch: {
    paddingTop:20,
  },
  but: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: "#5eba7d",
    borderRadius: 10,
  },
  butText: {
    fontSize: 30,
    fontFamily: "serif",
    fontWeight: "bold",
  }
});
