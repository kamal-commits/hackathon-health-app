import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Box, Heading, HStack, VStack } from 'native-base'
import DetailCard from '../components/Card/DetailCard'
import { IMAGES } from '../utils/constants'
import CustomHeading from '../components/Form/CustomHeading'

const Appointments = () => {
	return (
		<Box>
			<DetailCard>
				<HStack space={3}>
					{/* <VStack> */}
					<Avatar source={{ uri: IMAGES.LOGIN }} size='lg' />
					<VStack>
						<Heading size={'md'} fontWeight='bold'>
							Doctor Name
						</Heading>
						<Heading size={'sm'} fontWeight='bold'>
							18th May
						</Heading>
						<Heading size={'xs'} fontWeight='bold'>
							11:00-12:00
						</Heading>
					</VStack>
					{/* </VStack> */}
				</HStack>
			</DetailCard>
		</Box>
	)
}

export default Appointments

const styles = StyleSheet.create({})
