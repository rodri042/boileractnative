import React, { Component } from "react";
import { Platform, View, Text, Image } from "react-native";
import Counter from "./Counter";
import styles from "./App.styles";

// https://facebook.github.io/react-native/docs/getting-started

const instructions = Platform.select({
  ios: "I'm running on IOS",
  android: "I'm running on Android"
});

const separator = (
  <View
    style={{
      marginTop: 10,
      marginBottom: 10,
      borderBottomColor: "black",
      borderBottomWidth: 1,
      width: "100%"
    }}
  />
);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/07/14/17/07/star-2504407_960_720.png"
          }}
          style={{ width: 100, height: 100 }}
        />
        {separator}
        <Counter style={styles.counter} />
      </View>
    );
  }
}
