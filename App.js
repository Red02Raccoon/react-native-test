import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! ohohoh</Text>
      <StatusBar style="auto" />
      <Text>Hello world! 🎉🎉🎉</Text>
      <Text>{Platform.OS}</Text>
      <Text>{Platform.Version}</Text>
      <Text>Open up App.js to start working on your app! ohohoh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        backgroundColor: "green",
      },
      default: {
        backgroundColor: "blue",
      },
    }),
  },
});
