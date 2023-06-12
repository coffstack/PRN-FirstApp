import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TextInput } from "./components/TextInput";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "lucas@coffstack.com",
    address: {
      country: "Brazil",
      city: "",
    },
  });

  function updateFirst(text: string) {
    const updatedValue = {
      ...formValues,
    };
    updatedValue.firstName = text;

    setFormValues(updatedValue);
  }

  function updateLast(text: string) {
    setFormValues({
      ...formValues,
      lastName: text,
    });
  }

  function updateCity(text: string) {
    setFormValues({
      ...formValues,
      address: {
        ...formValues.address,
        city: text,
      },
    });
  }

  return (
    <View style={styles.container}>
      <TextInput value={formValues.firstName} onChangeText={updateFirst} />
      <TextInput value={formValues.lastName} onChangeText={updateLast} />
      <TextInput value={formValues.address.city} onChangeText={updateCity} />

      <Text
        style={styles.text}
      >{`${formValues.firstName} ${formValues.lastName}:\n${formValues.email} \n ${formValues.address.city} - ${formValues.address.country}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 50,
    fontWeight: "bold",
    marginHorizontal: 10,
    textAlign: "center",
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
