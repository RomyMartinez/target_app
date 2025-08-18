import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    color: colors.gray[500],
    marginBottom: 5,
    fontFamily: fontFamily.medium,
  },
  status: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  value: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fontFamily.medium,
    flex: 1,
  },
  target: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
  },
  percentage: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.blue[500],
  },
  progress: {
    marginTop: 16,
    width: "100%",
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.gray[300],
    overflow: "hidden",
  },
  currentProgress: {
    height: 5,
    backgroundColor: colors.blue[500],
  },
});
