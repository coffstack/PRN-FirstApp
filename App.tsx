import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  function changeName(text: string) {
    console.log(text);
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Profissional React Native
      </Text>
      <TextInput
        // value={"Rafael"}
        autoCapitalize="none"
        multiline
        placeholder="Digite seu nome"
        // onChange={(e) => console.log(e.nativeEvent.text)}

        //Callback that is called when the text input's text changes.
        // Changed text is passed as an argument to the callback handler.
        //((text: string) => void) | undefined
        // onChangeText={(text) => console.log(text)}
        onChangeText={changeName}
        placeholderTextColor="#ddd"
        style={{
          borderWidth: 1,
          height: 50,
          width: 250,
          marginTop: 10,
          paddingHorizontal: 10,
          color: "#550ab1",
          fontWeight: "bold",
          fontSize: 18,
        }}
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
