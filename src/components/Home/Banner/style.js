import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 60,
    height: 120,
    borderRadius: 8,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
