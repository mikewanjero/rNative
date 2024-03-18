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
    backgroundColor: "aqua",
    textAlign: "center",
  },
  boxTwo: {
    paddingTop: 90,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "violet",
    textAlign: "center",
  },
  boxThree: {
    paddingTop: 135,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "magenta",
    textAlign: "center",
  },
  boxFour: {
    paddingTop: 170,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "cyan",
    textAlign: "center",
  },
});
