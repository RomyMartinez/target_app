import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";
import Input, { CurrencyInputProps } from "react-native-currency-input";

type Props = CurrencyInputProps & {
  label: string;
};

export function CurrencyInput({ label, ...rest }: Props) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
}
