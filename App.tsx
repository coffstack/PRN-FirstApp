import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CoffeeItem } from "./CoffeeList/CoffeeItem";
import { coffeeList } from "./CoffeeList/data/coffeeList";
import { Button } from "./components/Button";
import { List } from "./components/List";
import { TextInput } from "./components/TextInput";
import { login } from "./service/authService";

export default function App() {
  function changeName(text: string) {
    console.log(text);
  }

  async function onPressButton() {
    try {
      const token = await login("lucas@coffstack.com", "123456");
      Alert.alert("Token", token);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={({ nativeEvent }) => console.log(nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
        // style={{ paddingHorizontal: 10, backgroundColor: "red" }}
        // contentContainerStyle={{
        //   paddingHorizontal: 10,
        //   backgroundColor: "blue",
        // }}
        // showsVerticalScrollIndicator={false}
        // bounces={false}
      >
        {coffeeList.map((coffee) => (
          <CoffeeItem {...coffee} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
