import { ActivityIndicator } from "react-native";

import { colors } from "@/theme/color";
import { styles } from "./styles";

export function Loading() {
  return (
    <ActivityIndicator style={styles.container} color={colors.blue[500]} />
  );
}
