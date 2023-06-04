import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        // columnGap: 20,
        // rowGap: 20,
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "limegreen",
        }}
      />
    </View>
  );
}
