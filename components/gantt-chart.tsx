import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import InsetShadow from "react-native-inset-shadow"

const iPhone8ViewportWidth: number = 375
const iPhone8ViewportHeight: number = 667
const defaultMarginHorizontal: number = 20

const dates: Array<Dates> = [
	{date: 1, day: 'Sun'},
	{date: 2, day: 'Mon'},
	{date: 3, day: 'Tue'},
	{date: 4, day: 'Wed'},
	{date: 5, day: 'Thu'},
	{date: 6, day: 'Fri'},
	{date: 7, day: 'Sat'}
]
const ganttBars: number = 2
const ganttBarWidths: Array<number> = [100, 50]

export default function GanttChart() {
	return (
		<View style={styles.iPhone8Viewport}>
			<View style={styles.componentContainer}>

				<View style={styles.datesWrapper}>
					{
						dates.map( date => {
							return (
								<View style={styles.dates}>
									<Text style={[styles.textColor, styles.dateText]}>{date.date}</Text>
									<Text style={[styles.textColor, styles.dayText]}>{date.day}</Text>
								</View>
							)
						})
					}
				</View>

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
												style={[styles.textColor, styles.ganttBarShapeText]}
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
	componentContainer: {
		height: iPhone8ViewportHeight / 2,
		marginHorizontal: defaultMarginHorizontal
	},
	textColor: {
		color: '#ffffff',
	},
	ganttBarShapesWrapper: {
		flex: 4,
		justifyContent: 'flex-start',
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
	ganttBarShapeText: {
		fontSize: 14,
		fontWeight: '500'
	},
	datesWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(255, 255, 255, 0.8)'
	},
	dates: {
		alignItems: 'center',
	},
	dateText: {
		marginBottom: 5,
		fontSize: 20,
		fontWeight: '600',
	},
	dayText: {
		fontSize: 12,
		fontWeight: '300',
	}
})
