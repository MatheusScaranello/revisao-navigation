import { Text, View } from "react-native";
import styles from "./styles.js";

import Title from "../../components/Title";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Title title="Profile" />
      <Text>Welcome to the Profile screen!</Text>
    </View>
  );
}
