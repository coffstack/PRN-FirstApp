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
import { coffeeList100 } from "./CoffeeList/data/coffeeLis100";
import { Coffee, coffeeList } from "./CoffeeList/data/coffeeList";
import { SeparatorItem } from "./CoffeeList/SeparatorItem";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { TextInput } from "./components/TextInput";
import { login } from "./service/authService";

export default function App() {
  function changeName(text: string) {
    console.log(text);
  }

  function renderItem({ item }: ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        // numColumns={2}
        ListHeaderComponent={CoffeeHeader}
        ItemSeparatorComponent={SeparatorItem}
        data={coffeeList}
        keyExtractor={(coffee) => coffee.name}
        // renderItem={({ item }) => <CoffeeItem {...item} />}
        renderItem={renderItem}
        // windowSize={3}
        //           initialNumToRender={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
