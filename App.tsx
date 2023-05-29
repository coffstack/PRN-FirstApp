import {
  Button,
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
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

      <TouchableHighlight
        onPressIn={() => console.log("onPressIn")}
        underlayColor={"#550ab1"}
        onPress={() => console.log("Highlight")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity
        onPressOut={() => console.log("onPressOut")}
        activeOpacity={0.7}
        onPress={() => console.log("Opacity")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Opacity</Text>
      </TouchableOpacity>
      <Pressable
        delayLongPress={1000}
        onLongPress={() => console.log("onLongPress")}
        onPress={() => console.log("Pressable")}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Pressable</Text>
      </Pressable>
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
  button: {
    height: 50,
    width: 200,
    backgroundColor: "#1D013F",
    borderRadius: 12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
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
