import { View, Text, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { useState } from "react";

export default function Target() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert("Error", "Please provide a valid name and amount.");
    }
    setIsLoading(true);

    if (params.id) {
    } else {
      createTarget();
    }
  }

  async function createTarget() {
    try {
      Alert.alert("Success", "Target created successfully!", [
        {
          text: "OK",
          onPress: () => {
            router.back();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "An error occurred while creating the target.");
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader title="Target" subtitle="Add a new target" />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Target Name"
          placeholder="Ex: Travel to Japan, Buy a new car..."
          value={name}
          onChangeText={setName}
        />
        <CurrencyInput
          label="Target Value ($)"
          value={amount}
          onChangeValue={setAmount}
        />
        <Button
          title="Create Target"
          isLoading={isLoading}
          disabled={isLoading}
          onPress={handleSave}
        />
      </View>
    </View>
  );
}
