import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "90%",
  },
  inputRadio: {
    borderWidth: 2,
    borderColor: "#4EA8DE",
    height: 17,
    width: 17,
    borderRadius: 100,
  },
  taskText: {
    color: "#F2F2F2",
  },
});
