import { Suspense } from "react";

import { Stack } from "expo-router";
import { colors } from "@/theme/color";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/Loading";
import { StatusBar } from "expo-status-bar";

import { migrate } from "@/database/migrate";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout() {
  const [fontsLoaded] =
   useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });


  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider databaseName="app.db" onInit={migrate} useSuspense>
        <StatusBar style="dark" backgroundColor={colors.white} />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.white,
            },
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}

