import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";

export default function TaskInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.containerInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.containerButton}>
        <PlusCircle size={32} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}
