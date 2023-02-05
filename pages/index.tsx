import React from "react"
import { StyleSheet, Text, View } from "react-native"
import GanttChart from "../components/gantt-chart"

export default function App() {
  return (
    <View style={styles.container}>
      <GanttChart />
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
