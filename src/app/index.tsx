import { View, StatusBar } from "react-native";
import { router } from "expo-router";
import { HomeHeader } from "@/components/HomeHeader";
import { Target, TargetProps } from "@/components/Target";
import { List } from "@/components/List";
import { Button } from "@/components/Button";

const summaryData = {
  total: "$100,00",
  input: { label: "In", value: "$100,00" },
  output: { label: "Out", value: "- $100,00" },
};

const targetsData: TargetProps[] = [
  {
    id: "1",
    name: "Car",
    percentage: "100%",
    current: "$100,00",
    target: "$100,00",
  },
  {
    id: "2",
    name: "House",
    percentage: "50%",
    current: "$50,00",
    target: "$100,00",
  },
  {
    id: "3",
    name: "Vacation",
    percentage: "25%",
    current: "$25,00",
    target: "$100,00",
  },
  {
    id: "4",
    name: "Car",
    percentage: "100%",
    current: "$100,00",
    target: "$100,00",
  },
];

export default function App() {
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
        data={targetsData}
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
