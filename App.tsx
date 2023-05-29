import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";

export default function App() {
  function changeName(text: string) {
    console.log(text);
  }

  function onPressButton() {
    console.log("Pressionou no botão");
    Alert.alert("Meu primeiro app", Platform.OS);
  }
  return (
    <View style={styles.container}>
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
        onPress={() => console.log("Entrar")}
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
