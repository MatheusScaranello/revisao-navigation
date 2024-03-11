import { Text, View } from "react-native";
import styles from "./styles.js";

import Title from "../../components/Title";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Category" />
      <Text>Welcome to the Category screen!</Text>
    </View>
  );
}
