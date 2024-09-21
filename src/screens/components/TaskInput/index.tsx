import React, { useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { taskListProps } from "../../home";

interface TaskInputProps {
  setNewTaskList: (newTask: taskListProps) => void;
}

export default function TaskInput({ setNewTaskList }: TaskInputProps) {
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task === "") {
      return Alert.alert("Task não pode ser vazia");
    }

    setNewTaskList({ key: task, body: task });

    setTask("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.containerInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity style={styles.containerButton} onPress={handleAddTask}>
        <PlusCircle size={24} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}
