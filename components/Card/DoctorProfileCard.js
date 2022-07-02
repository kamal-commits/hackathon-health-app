import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomView from '../CustomView'
import { Box, HStack, Image, VStack, Text, Avatar, Spacer } from 'native-base'
import { COLORS } from '../../utils/constants'

const DoctorProfileCard = () => {
	let overviewText = [
		{ number: '24 Year', text: 'Experience' },
		{ number: `${100}+`, text: 'Reviews' },
		{ number: `${175}+`, text: 'Patients' },
	]

	return (
		<CustomView style={styles.container}>
			<Box style={styles.mainContainer}>
				<Box style={styles.detailBox}>
					<HStack alignItems='center' space={6}>
						<Image
							source={{
								uri: 'https://wallpaperaccess.com/full/317501.jpg',
							}}
							alt='Alternate Text'
							size='xl'
							style={styles.image}
						/>
						<VStack>
							<Text style={styles.text}>{'Name'}</Text>
							<Text style={[styles.text, styles.text2]}>{'Department'}</Text>

							<Box>
								<Text style={[styles.text, styles.text2, styles.text3]}>
									{'Location'}
								</Text>
							</Box>
						</VStack>
						<Spacer />
					</HStack>

					{/* <Box>
						<Image
							source={{
								uri: 'https://wallpaperaccess.com/full/317501.jpg',
							}}
							alt='Alternate Text'
							size='xl'
							style={styles.image}
						/>
					</Box> */}
				</Box>
				<Box style={styles.bottomCard}>
					<HStack justifyContent={'space-between'}>
						{overviewText.map((val) => {
							return (
								<VStack>
									<Text style={[styles.text, styles.text2]}>{val?.number}</Text>
									<Text style={[styles.text, styles.text2, styles.text3]}>
										{val?.text}
									</Text>
								</VStack>
							)
						})}

						{/* <Text style={[styles.text, styles.text2]}>{'Experience'}</Text>
						<Text style={[styles.text, styles.text2]}>{'Patients'}</Text> */}
					</HStack>
				</Box>
			</Box>
		</CustomView>
	)
}

export default DoctorProfileCard

const styles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		backgroundColor: COLORS.PRIMARY,
		height: 240,
		// flex: 1,
		borderRadius: 25,
		padding: 20,
	},
	container: {
		width: '100%',
	},
	detailBox: {
		flexDirection: 'row',
	},
	image: {
		borderRadius: 20,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 24,
	},
	text2: {
		fontSize: 16,
	},
	text3: {
		fontSize: 12,
	},
	bottomCard: {
		marginTop: 20,
	},
})
