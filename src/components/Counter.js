import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import styles from "./App.styles";

class Counter extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          Current value: {this.props.count}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Increment"
            color="#841584"
            accessibilityLabel="Add 1 unit"
            onPress={this.props.increment}
          />
          <Button
            title="Increment async"
            color="#ff0000"
            accessibilityLabel="Add 1 unit"
            onPress={this.props.incrementAsync}
          />
        </View>
      </View>
    );
  }
}

const mapState = (state) => ({
  count: state.count
});

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
});

export default connect(
  mapState,
  mapDispatch
)(Counter);
