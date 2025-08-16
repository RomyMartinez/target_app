import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Target() {
  return (
    <View>
      <Text>Target</Text>
      <Button title="Go to Home" onPress={() => router.navigate("/")} />
    </View>
  );
}
