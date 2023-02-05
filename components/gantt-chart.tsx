import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GanttChart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gantt Chart Component View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
