import React from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";


const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Task"
        keyboardType="ascii-capable"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 350,
    margin: 12,
    borderWidth: 0,
    backgroundColor: "#d6d6d6",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    color: "#1c96c5",
    fontFamily: "sans-serif-medium",

    shadowColor: "#d6d6d6",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  appButtonContainer: {
    height: 60,
    width: 350,
    backgroundColor: "#1c96c5",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: "#1c96c5",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

const Add_task = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export { UselessTextInput, Add_task };
