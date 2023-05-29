import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Profissional React Native</Text>
      <View style={{ backgroundColor: "red" }}>
        <Image
          onLoad={({ nativeEvent }) => {
            console.log("width:", nativeEvent.source.width);
            console.log("heigh:", nativeEvent.source.height);
          }}
          resizeMode="contain"
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://images.unsplash.com/photo-1661956602153-23384936a1d3",
          }}
        />
      </View>
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
