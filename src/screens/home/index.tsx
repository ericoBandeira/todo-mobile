import React, { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import Empty from "../components/Empty";
import Task from "../components/Task";

export interface taskListProps {
  key: string;
  body: string;
}

export default function Home() {
  const [taskList, setTaskList] = useState<taskListProps[]>([]);

  function setNewTaskList(newTask: taskListProps) {
    setTaskList((prevState) => [...prevState, newTask]);
  }

  function removeTask(task: string) {
    setTaskList((prevState) => prevState.filter((item) => item.body !== task));
  }

  return (
    <View style={styles.container}>
      <Header />
      <TaskInput setNewTaskList={setNewTaskList} />
      <View style={styles.containerTasks}>
        <View style={styles.containerCount}>
          <Text style={styles.createdTasks}>Criadas</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{taskList.length}</Text>
          </View>
        </View>
        <View style={styles.containerCount}>
          <Text style={styles.concludedTasks}>Concluídas</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>0</Text>
          </View>
        </View>
      </View>
      {taskList.length !== 0 ? (
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Task body={item.body} removeTask={removeTask} />
          )}
        />
      ) : (
        <Empty />
      )}
    </View>
  );
}
