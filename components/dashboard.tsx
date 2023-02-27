import React from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"
import InsetShadow from "react-native-inset-shadow"
import Image from 'next/image'
import ganttIcon from '../public/images/GanttIcon.png'
import cardIcon from '../public/images/CardIcon.png'
import editIcon from '../public/images/EditIcon.png'
import settingsIcon from '../public/images/SettingsIcon.png'

const iPhone8ViewportWidth: number = 375
const iPhone8ViewportHeight: number = 667
const defaultMarginHorizontal: number = 20

export default function Dashboard() {
	return (
			<View style={styles.dashboardWrapper}>
				<InsetShadow
						containerStyle={styles.shadow}
						shadowRadius={12}
						shadowOffset={5}
						elevation={50}
						shadowOpacity={0.25}
						color='#000000'
					>
						<View style={styles.iconsWrapper}>

							<View style={styles.iconWrapper}>
								<Image
									src={ganttIcon}
									style={styles.iconImages}
									alt="Gantt Chart"
								/>
								<Text style={[styles.textColor, styles.iconText]}>Gantt Chart</Text>
							</View>
							
							<View style={styles.iconWrapper}>
								<Image
									src={cardIcon}
									style={styles.iconImages}
									alt="Card"
								/>
								<Text style={[styles.textColor, styles.iconText]}>Card</Text>
							</View>
							
							<View style={styles.iconWrapper}>
								<Image
									src={editIcon}
									style={styles.iconImages}
									alt="Edit"
								/>
								<Text style={[styles.textColor, styles.iconText]}>Edit</Text>
							</View>
							
							<View style={styles.iconWrapper}>
								<Image
									src={settingsIcon}
									style={styles.iconImages}
									alt="Settings"
								/>
								<Text style={[styles.textColor, styles.iconText]}>Settings</Text>
							</View>
							

						</View>
				</InsetShadow>
			</View>
	)
}

const styles = StyleSheet.create({
	dashboardWrapper: {
		flex: 1,
		width: '100%',
		position: 'relative',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#005A8B',
	},
	textColor: {
		color: '#ffffff',
	},
	shadow: {
		width: '100%'
	},
	iconsWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
	},
	iconWrapper: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	iconImages: {
		width: 25,
		height: 25,
		marginBottom: 5,
	},
	iconText: {
		fontSize: 10,
		fontWeight: '300',
	}
})
