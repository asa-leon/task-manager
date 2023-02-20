import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
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
const cards: Array<Cards> = [
	{task: 'Task 1', description: 'This is task 1 of subject A', relatedSubject: 'Subject A'},
	{task: 'Task 2', description: 'This is task 2 of subject A', relatedSubject: 'Subject A'},
	{task: 'Task 1', description: 'This is task 1 of subject B', relatedSubject: 'Subject B'},
	{task: 'Task 2', description: 'This is task 2 of subject B', relatedSubject: 'Subject B'},
	{task: 'Task 3', description: 'This is task 3 of subject B', relatedSubject: 'Subject B'}
]

export default function Card() {
	return (
			<View style={styles.componentContainer}>
				<ScrollView>
				<View style={styles.cardShapesWrapper}>
					
					{
						cards.map( (card, idx) => {
							return (
								<View 
									style={[
										styles.cardShapes,
										idx !== 0 ? styles.cardShapeUpperBorder : null,
										{top: idx * 50}
									]}
									key={idx}
								>
									<InsetShadow
										containerStyle={styles.shadow}
										shadowRadius={12}
										shadowOffset={5}
										elevation={50}
										shadowOpacity={0.2}
										color='#000000'
									>
										<View style={styles.taskWrapper}>
											<Text
												style={[styles.textColor, styles.cardTitleText]}
												numberOfLines={1}
												ellipsizeMode='tail'
											>
												{card.task}
											</Text>
											<Text
												style={[styles.textColor, styles.cardText]}
												numberOfLines={1}
												ellipsizeMode='tail'
											>
												{card.description}
											</Text>
										</View>

										<View style={styles.subjectWrapper}>
											<Text style={[styles.cardSpanText]}>Subject includes this task</Text>
											<Text
												style={[styles.cardTitleText]}
												numberOfLines={1}
												ellipsizeMode='tail'
											>
												{card.relatedSubject}
											</Text>
										</View>
									</InsetShadow>
								</View>
							)
						})
					}
					
				</View>
				</ScrollView>
			</View>
	)
}

const styles = StyleSheet.create({
	componentContainer: {
		width: iPhone8ViewportWidth - (defaultMarginHorizontal * 2),
		height: iPhone8ViewportHeight / 2,
		position: 'relative',
		marginHorizontal: defaultMarginHorizontal
	},
	textColor: {
		color: '#ffffff',
	},
	cardShapesWrapper: {
		justifyContent: 'flex-start',
	},
	cardShapes: {
		position: 'absolute',
		width: '100%',
		height: 180,
		marginVertical: 10,
		borderRadius: 5,
		backgroundColor: '#00A5FF'
	},
	cardShapeUpperBorder: {
		borderTopWidth: 1,
		borderTopColor: 'rgba(255, 255, 255, 0.5)',
	},
	shadow: {
		borderRadius: 5
	},
	taskWrapper: {
		flex: 2,
		justifyContent: 'flex-start',
		alignSelf: 'flex-start',
		width: '100%',
		padding: 20,
	},
	subjectWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'flex-start',
		width: '100%',
		paddingHorizontal: 20,
		backgroundColor: '#EBEBEB',
	},
	cardText: {
		fontSize: 14,
		fontWeight: '500'
	},
	cardTitleText: {
		marginBottom: 10,
		fontSize: 20,
		fontWeight: '600',
	},
	cardSpanText: {
		fontSize: 10,
		fontWeight: '200',
	}
})
