import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

import logoImg from "../../../public/Logo.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
    </View>
  );
}
