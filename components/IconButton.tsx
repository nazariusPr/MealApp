import { Pressable, ViewStyle, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  onPress: () => void;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  color?: string;
};

function IconButton({ onPress, icon, color }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color || "white"} />
    </Pressable>
  );
}

export default IconButton;

type Styles = {
  pressed: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  pressed: {
    opacity: 0.5,
  },
});
