import React from "react"
import { StyleSheet, Text, View } from "react-native"
import InsetShadow from "react-native-inset-shadow"

const iPhone8ViewportWidth: number = 375
const iPhone8ViewportHeight: number = 667
const defaultMarginHorizontal: number = 15
const ganttBars: number = 2
const ganttBarWidths: Array<number> = [100, 50]

export default function GanttChart() {
	return (
		<View style={styles.iPhone8Viewport}>
			<View style={styles.container}>
				<View style={styles.ganttBarShapesWrapper}>
					{
						ganttBarWidths.map( ganttBarWidth => {
							return (
								<View 
									style={[
										styles.ganttBarShapes,
										{ width: (iPhone8ViewportWidth * (ganttBarWidth / 100)) - (defaultMarginHorizontal * 2) }
									]}
									key={ganttBarWidth}
								>
									<InsetShadow
										containerStyle={styles.shadow}
										shadowRadius={12}
										shadowOffset={5}
										elevation={50}
										shadowOpacity={0.5}
										color='#000000'
									>
										<View style={styles.textWrapper}>
											<Text
												style={styles.text}
												numberOfLines={1}
												ellipsizeMode='tail'
											>
												Gantt Chart Component View
											</Text>
										</View>
									</InsetShadow>
								</View>
							)
						})
					}	
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	iPhone8Viewport: {
		width: iPhone8ViewportWidth,
		height: iPhone8ViewportHeight,
		backgroundColor: '#000'
	},
	container: {
		flex: 1,
		marginHorizontal: defaultMarginHorizontal
	},
	ganttBarShapesWrapper: {
	},
	ganttBarShapes: {
		height: 35,
		marginVertical: 10,
		borderRadius: 5,
		backgroundColor: '#00A5FF'
	},
	shadow: {
		borderRadius: 5
	},
	textWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'flex-start',
		width: '100%',
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 12,
		color: '#ffffff',
	}
})
