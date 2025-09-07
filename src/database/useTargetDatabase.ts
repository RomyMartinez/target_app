import { useSQLiteContext } from "expo-sqlite";

export type Target = {
  name: string;
  amount: number;
};

export function useTargetDatabase() {
  const database = useSQLiteContext();

  async function createTarget(data: Target) {
    const statement = await database.prepareAsync(`
      INSERT INTO targets (name, amount) VALUES ($name, $amount);
      `);

    statement.executeAsync({
      $name: data.name,
      $amount: data.amount,
    });
  }

  return { createTarget };
}
