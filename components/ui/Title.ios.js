import { View, Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
