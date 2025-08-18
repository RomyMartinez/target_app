import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/Button";

export default function Transaction() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Id: {id}</Text>
      <Button title="Go to Home" onPress={() => router.navigate("/")} />
    </View>
  );
}
