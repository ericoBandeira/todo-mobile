import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: -30,
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 6,
  },
  containerInput: {
    height: 54,
    width: "83%",
    backgroundColor: "#262626",
    borderRadius: 6,

    fontSize: 16,
    paddingLeft: 15,
    color: "#F2F2F2",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    height: 54,
    width: "17%",
    borderRadius: 6,
  },
});
