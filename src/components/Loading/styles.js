import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 100,
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#2e2636e0",
    justifyContent: "center",
    alignItems: "center",
  },
});
