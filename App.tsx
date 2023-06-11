import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  // let count = 0;

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <Button onPress={increment} title="+ 1" style={styles.buttonContainer} />

      <Button onPress={decrement} title="- 1" style={styles.buttonContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  count: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
