import { View, StatusBar, Alert } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { HomeHeader } from "@/components/HomeHeader";
import { Target, TargetProps } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { numberToCurrency } from "@/utils/numberToCurrency";

import { useTargetDatabase } from "@/database/useTargetDatabase";
import { use, useCallback, useState } from "react";

const summaryData = {
  total: "$100,00",
  input: { label: "In", value: "$100,00" },
  output: { label: "Out", value: "- $100,00" },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [targets, setTargets] = useState<TargetProps[]>([]);
  const { getTargets } = useTargetDatabase();

  async function fetchTargets(): Promise<TargetProps[]> {
    try {
      const response = await getTargets();
      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        current: numberToCurrency(item.current),
        percentage: item.percentage.toFixed(0) + "%",
        target: numberToCurrency(item.amount),
      }));
    } catch (error) {
      Alert.alert("Error", "An error occurred while fetching targets.");
      console.log(error);
    }
  }

  async function fetchData() {
    const targetDataPromise = fetchTargets();

    const [targets] = await Promise.all([targetDataPromise]);
    setTargets(targets);
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <HomeHeader data={summaryData} />
      <List
        title="Targets"
        emptyMessage="No targets found"
        data={targets}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        containerStyle={{ paddingHorizontal: 24 }}
      />
      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Add Target" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
