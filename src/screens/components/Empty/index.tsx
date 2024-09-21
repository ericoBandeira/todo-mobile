import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import logoImg from "../../../public/Clipboard.png";

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <Text style={styles.strongText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
