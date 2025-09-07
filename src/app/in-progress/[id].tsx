import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import { View, Text, Alert } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Transaction } from "@/components/Transaction";
import { List } from "@/components/List";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { numberToCurrency } from "@/utils/numberToCurrency";

import { useTargetDatabase } from "@/database/useTargetDatabase";
import { use, useCallback, useState } from "react";

export default function InProgress() {
  const [isFetching, setIsFetching] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    current: "$0.00",
    percentage: 0,
    target: "$0.00",
  });
  const { id } = useLocalSearchParams<{ id: string }>();
  const { show } = useTargetDatabase();

  async function fetchTarget() {
    try {
      const response = await show(Number(id));
      setDetails({
        name: response.name,
        current: numberToCurrency(response.current),
        percentage: response.percentage,
        target: numberToCurrency(response.amount),
      });
      setIsFetching(false);
    } catch (error) {
      Alert.alert("Error", "An error occurred while fetching the target.");
      console.log(error);
    }
  }

  async function fetchData() {
    const fetchTargetPromise = fetchTarget();

    await Promise.all([fetchTargetPromise]);
    setIsFetching(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title={details.name}
        rightButton={{
          icon: "edit",
          onPress: () => router.navigate("/target"),
        }}
      />
      <Progress data={details} />
      <List
        title="Transactions"
        data={[]}
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
