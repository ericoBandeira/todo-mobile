import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from "phosphor-react-native";

interface TaskProps {
  body: string;
  removeTask: (task: string) => void;
  addConclude: () => void;
  removeConclude: () => void;
}

export default function Task({
  body,
  removeTask,
  addConclude,
  removeConclude,
}: TaskProps) {
  const [done, setDone] = useState(false);

  function handleSetDone() {
    if (done === false) {
      addConclude();
    } else {
      removeConclude();
    }
    setDone(!done);
  }

  function handleParticipantRemove() {
    Alert.alert("Remover", `Deseja remover esta task?`, [
      {
        text: "Sim",
        onPress: () => removeTask(body),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSetDone}>
        <View style={done ? styles.inputRadioClicked : styles.inputRadio}>
          {done && <Check size={12} color="#F2F2F2" weight="bold" />}
        </View>
        <Text style={done ? styles.taskTextClicked : styles.taskText}>
          {body}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleParticipantRemove}>
        <Trash size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
