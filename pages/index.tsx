import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GanttChart from '../components/gantt-chart'
import Card from '../components/card'
import Dashboard from '../components/dashboard'

const iPhone8ViewportWidth: number = 375
const iPhone8ViewportHeight: number = 667
const defaultMarginHorizontal: number = 20

export default function App() {
  return (

	<View style={styles.iPhone8Viewport}>
		<View style={styles.container}>
			<GanttChart />
			<Card />
			<Dashboard />
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	iPhone8Viewport: {
		width: iPhone8ViewportWidth,
		height: iPhone8ViewportHeight,
		backgroundColor: '#000000'
	},
  container: {
    flex: 1
  },
  text: {
    fontSize: 16,
  },
})
