import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 60,
    height: 30,
    backgroundColor: globalStyles.colors.lightGray,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 14,
    marginBottom: 50,
  },

  activeButton: {
    backgroundColor: "red",
  },

  button: {
    backgroundColor: "green",
  },

  gradientContainer: {
    width: 120,
    height: 30,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    height: 30,
    width: 120,
  },
});
