import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  boxOne: {
    paddingTop: 45,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 60,
    backgroundColor: "lime",
    textAlign: "center",
  },
  boxTwo: {
    paddingTop: 45,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 60,
    backgroundColor: "violet",
    textAlign: "center",
  },
  boxThree: {
    paddingTop: 45,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 60,
    backgroundColor: "magenta",
    textAlign: "center",
  },
  boxFour: {
    paddingTop: 45,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "cyan",
    textAlign: "center",
  },
});
