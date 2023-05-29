import {
  Button,
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
        multiline
        placeholder="Digite seu nome"
        onChangeText={changeName}
        placeholderTextColor="#ddd"
        style={styles.textInput}
      />
      <Button color="#550ab1" title="Enviar" onPress={onPressButton} />
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
  textInput: {
    borderWidth: 1,
    height: 50,
    width: 250,
    marginTop: 10,
    paddingHorizontal: 10,
    color: "#550ab1",
    fontWeight: "bold",
    fontSize: 18,
  },
});
