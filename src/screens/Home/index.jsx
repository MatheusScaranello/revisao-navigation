import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";

export default function Home() {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <Text style={styles.welcome}>Welcome to the Home screen!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigator.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigator.navigate("Category")}
      >
        <Text style={styles.buttonText}>Go to Category</Text>
      </TouchableOpacity>
    </View>
  );
}
