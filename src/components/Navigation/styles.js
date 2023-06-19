import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    elevation: 0,
    paddingBottom: 30,
    height: 94,
  },

  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 2,
  },

  text: {
    fontWeight: 600,
    fontSize: 13,
  },

  gradientContainer: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },

  gradientTabContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
});
