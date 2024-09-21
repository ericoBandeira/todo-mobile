import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  containerTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  containerCount: {
    flexDirection: "row",
    gap: 6,
  },
  createdTasks: {
    color: "#4EA8DE",
    fontSize: 16,
    fontWeight: "bold",
  },
  concludedTasks: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "bold",
  },
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    height: 19,
    width: 25,
    borderRadius: 100,
  },
  numberText: {
    color: "#D9D9D9",
  },
});
