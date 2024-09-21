import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import Empty from "../components/Empty";
import Task from "../components/Task";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TaskInput />

      <View style={styles.containerTasks}>
        <View style={styles.containerCount}>
          <Text style={styles.createdTasks}>Criadas</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>0</Text>
          </View>
        </View>
        <View style={styles.containerCount}>
          <Text style={styles.concludedTasks}>Concluídas</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>0</Text>
          </View>
        </View>
      </View>

      {/* <Empty /> */}
      <Task />
    </View>
  );
}
