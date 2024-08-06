import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type SubtitleProps = {
  children: string;
  subtitleContainerStyle?: ViewStyle;
  subtitleTextStyle?: TextStyle;
};

function Subtitle({
  children,
  subtitleContainerStyle,
  subtitleTextStyle,
}: SubtitleProps) {
  return (
    <View style={[styles.subtitleContainer, subtitleContainerStyle]}>
      <Text style={[styles.subtitle, subtitleTextStyle]}>{children}</Text>
    </View>
  );
}

export default Subtitle;

type Styles = {
  subtitleContainer: ViewStyle;
  subtitle: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
