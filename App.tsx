import { Alert, Platform, StyleSheet, Text, View } from "react-native";
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
      <List />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Profissional React Native
      </Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        onChangeText={changeName}
      />
      <TextInput
        secureTextEntry
        placeholder="Digite seu senha"
        onChangeText={changeName}
      />

      <Button
        style={{ marginTop: 20 }}
        onPress={onPressButton}
        title={"Entrar"}
      />
      <Button
        style={{ marginTop: 10 }}
        onPress={() => console.log("Criar uma Conta")}
        variant="secondary"
        title="Criar Conta"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
