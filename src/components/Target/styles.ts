import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    gap: 7,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
  status: {
    fontSize: 10,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
});
