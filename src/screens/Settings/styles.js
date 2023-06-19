import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  container: {
    backgroundColor: globalStyles.colors.lightGray,
    width: Dimensions.get("window").width - 60,
    minHeight: 90,
    borderRadius: 8,
    marginBottom: 14,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content: {
    justifyContent: "center",
    maxWidth: 310,
  },

  tagline: {
    color: globalStyles.colors.mediumGray,
    fontWeight: 600,
  },

  number: {
    fontSize: 18,
    color: globalStyles.colors.primary,
    fontWeight: 800,
  },

  icon: {
    height: 26,
    width: 26,
  },
});
