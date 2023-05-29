import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  StyleSheet,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
  // onPress: () => void;
}
export function Button({ title, variant = "primary", style, ...rest }: Props) {
  const variantStyle =
    variant === "primary" ? styles.wrapperPrimary : styles.wrapperSecondary;

  const textColor = variant === "primary" ? "#FFF" : "#1D013F";
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapperCommon, variantStyle, style]}
      {...rest}
    >
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapperCommon: {
    height: 50,
    width: 300,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPrimary: {
    backgroundColor: "#1D013F",
  },
  wrapperSecondary: {
    borderColor: "#1D013F",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
