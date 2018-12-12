import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // uses Flexbox
    flexDirection: "column", // primary axis = "column"
    justifyContent: "center", // alignment on the primary axis
    alignItems: "center", // alignment on the secondary axis
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  counter: {
    backgroundColor: "#ff0000"
  }
});
