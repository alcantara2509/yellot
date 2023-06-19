import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },

  container: {
    backgroundColor: globalStyles.colors.lightGray,
    width: (Dimensions.get("window").width - 74) / 2,
    height: 98,
    borderRadius: 8,
    marginBottom: 14,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content: {
    justifyContent: "center",
  },

  tagline: {
    color: globalStyles.colors.mediumGray,
    fontWeight: 600,
  },

  number: {
    fontSize: 30,
    color: globalStyles.colors.primary,
    fontWeight: 800,
  },

  icon: {
    height: 26,
    width: 26,
  },
});
