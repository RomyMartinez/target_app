import { router, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction } from "@/components/Transaction";
import { List } from "@/components/List";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { Button } from "@/components/Button";

export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const details = {
    current: "1000",
    target: "1000",
    percentage: 1000,
  };

  const transactions = [
    {
      id: "1",
      value: "100",
      date: "2021-01-01",
      description: "Apple Watch",
      type: TransactionTypes.Input,
    },
    {
      id: "2",
      value: "100",
      date: "2021-01-01",
      description: "Apple Watch",
      type: TransactionTypes.Output,
    },
  ];

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => router.navigate("/target"),
        }}
      />
      <Progress data={details} />
      <List
        title="Transactions"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="No transactions found"
      />
      <Button
        title="Add Transaction"
        onPress={() => {
          router.navigate(`/transaction/${id}`);
        }}
      />
    </View>
  );
}
