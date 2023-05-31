import React from "react";
import { View, Text } from "react-native";

const list = ["element 1", "element 2", "element 3"];
export function List() {
  return (
    <View>
      {list.map((item, index) => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  );
}
