import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

export default function Task() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.inputRadio} />
        <Text style={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Trash size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
