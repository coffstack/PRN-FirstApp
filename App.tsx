import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "./components/Button";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [showCount, setShowCount] = useState(true);

  // let count = 0;

  function increment() {
    //((prevState: S) => S);
    setCount((prevState) => prevState + 1);
    console.log(count);
  }

  function decrement() {
    setCount((prev) => prev - 1);
    console.log(count);
  }

  function toggleCount() {
    setShowCount((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      {showCount && <Text style={styles.count}>{count}</Text>}

      <Button onPress={increment} title="+ 1" style={styles.buttonContainer} />

      <Button onPress={decrement} title="- 1" style={styles.buttonContainer} />

      <Button variant="secondary" title="show" onPress={toggleCount} />
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
