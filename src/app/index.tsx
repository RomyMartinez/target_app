import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hello</Text>
      <Button title="Click me" onPress={() => router.navigate("/target")} />
    </View>
  );
}
