import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  View,
  Pressable,
  Alert,
} from "react-native";

var input = "";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  input = text;
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

const Add_task = ({ onPress, title }) => {
  const [tasks, setdata] = useState([]);

  function addData() {
    setdata([...tasks, input]);
  }

  return (
    <View style={(styles.marginBottom = 80)}>
      <TouchableOpacity
        onPress={() => {
          addData();
        }}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{ paddingBottom: 120 }}
        data={tasks}
        renderItem={(itemD) => {
          return (
            <Pressable
              onPress={() => {
                const createTwoButtonAlert = () =>
				
                  Alert.alert("Confirmation", "Are you sure to delete this Task?", [
                    {
                      text: "No",
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => setdata((tasks) => {
						return tasks.filter(function (value) {
							return itemD.item !== value;
						});
						})},
                  ]);

				createTwoButtonAlert()
              }}
            >
              <View>
                <Text style={styles.listStyle}>{itemD.item}</Text>
              </View>
            </Pressable>
          );
        }}
        alwaysBounceHorizontal={false}
      />
    </View>
  );
};

const RenderItem = ({ item }) => {
  return <Text style={styles.listStyle}>{item}</Text>;
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 350,
    margin: 12,
    marginTop: 150,
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
    marginBottom: 50,
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
    textTransform: "uppercase",
  },

  listStyle: {
    width: 350,
    height: 60,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    color: "#000",
    marginTop: 10,
    backgroundColor: "#d6d6d6",
    textAlign: "center",
    padding: 15,
    fontSize: 20,
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
});

export { UselessTextInput, Add_task };
