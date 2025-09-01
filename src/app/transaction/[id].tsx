import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { TransactionType } from "@/components/TransactionType";
import { useState } from "react";
import { TransactionTypes } from "@/utils/TransactionTypes";

export default function Transaction() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [transactionType, setTransactionType] = useState(
    TransactionTypes.Input,
  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader title="Transaction Details" />

      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType
          selected={transactionType}
          onChange={setTransactionType}
        />
        <CurrencyInput label="Value ($)" value={0} />
        <Input label="Motive (Optional)" placeholder="Ex: Groceries, Rent..." />
        <Button title="Save" onPress={() => {}} />
      </View>
    </View>
  );
}
