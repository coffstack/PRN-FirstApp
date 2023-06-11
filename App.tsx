import { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { CoffeeHeader } from "./CoffeeList/CoffeeHeader";
import { CoffeeItem } from "./CoffeeList/CoffeeItem";
import { Coffee, coffeeList } from "./CoffeeList/data/coffeeList";
import { SeparatorItem } from "./CoffeeList/SeparatorItem";
import { Button } from "./components/Button";

export default function App() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log(count);
  }

  function decrement() {
    count = count - 1;
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
