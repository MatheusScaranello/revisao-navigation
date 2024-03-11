import { Text, View } from "react-native";
import styles from "./styles";

import Title from "../../components/Title";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <Text>Welcome to the Home screen!</Text>
    </View>
  );
}
