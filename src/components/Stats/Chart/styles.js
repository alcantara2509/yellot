import { StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  subtitleContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  squareReal: {
    width: 12,
    height: 12,
    backgroundColor: globalStyles.colors.primary,
    marginRight: 8,
    marginLeft: 8,
  },

  squareExpected: {
    width: 12,
    height: 12,
    backgroundColor: globalStyles.colors.mediumGray,
    marginRight: 8,
    marginLeft: 20,
  },

  subtitleText: {
    color: globalStyles.colors.mediumGray,
  },
});
