import { View, Text } from "react-native";
import { router } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader title="Target" subtitle="Add a new target" />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Target Name"
          placeholder="Ex: Travel to Japan, Buy a new car..."
        />
        <CurrencyInput label="Target Value" value={0} />
        <Button title="Create Target" />
      </View>
    </View>
  );
}
