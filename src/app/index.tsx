import { View, Text, Button } from "react-native";
import { router } from "expo-router";
import { fontFamily } from "@/theme/fontFamily";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontFamily: fontFamily.bold }}>Hello</Text>
      <Button title="Click me" onPress={() => router.navigate("/target")} />
      <Button
        title="Go to Transaction"
        onPress={() => router.navigate("/transaction/123")}
      />
      <Button
        title="Go to In Progress"
        onPress={() => router.navigate("/in-progress/123")}
      />
    </View>
  );
}
