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
});
