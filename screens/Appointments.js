import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Box, Heading, HStack, VStack } from 'native-base'
import DetailCard from '../components/Card/DetailCard'
import { IMAGES } from '../utils/constants'
import Dialog from '../components/Dialog'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API } from '../utils/API'
import axios from 'axios'
import moment from 'moment'
const Appointments = ({ navigation }) => {
	const userType = 'DOCTOR'
	const [isOpen, setIsOpen] = React.useState(false)
	const [reason, setReason] = React.useState('')
	const [status, setStatus] = React.useState('')
	const [appointmentId, setAppointmentId] = React.useState(false)

	const [data, setData] = React.useState(false)
	console.log({ data })

	const fetchData = async () => {
		try {
			const token = await AsyncStorage.getItem('token')
			console.log('token', token)
			let result = await axios.get(API.GET_APPOINTMENTS, {
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			})

			console.log({ result })
			setData(result.data.data)
		} catch (err) {
			console.log({ err: JSON.stringify(err) })
		}
	}

	React.useEffect(() => {
		fetchData()
	}, [])

	const handleAppointment = async (appStatus) => {
		const token = await AsyncStorage.getItem('token')
		axios.put(
			API.UPDATE_APPOINTMENT,
			{ appointmentId, reason, status: appStatus?.toUpperCase() },
			{
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			}
		)
	}

	return (
		<Box h='full'>
			<Dialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				reason={reason}
				setReason={setReason}
				handleSubmit={handleAppointment}
				setStatus={setStatus}
			/>

			<DetailCard
				action
				onPress={() => {
					setIsOpen(true), setAppointmentId(val?._id)
				}}
				navigation={() => navigation.navigate('BookAppointment')}
			>
				{data && data.length > 0
					? data.map((val) => {
							return (
								<HStack space={3}>
									<Box>
										<Avatar source={{ uri: IMAGES.LOGIN }} size='lg' />
										<VStack>
											<Heading size={'md'} fontWeight='bold'>
												{typeof val?.doctor === 'object'
													? val?.doctor?.name
													: val?.user?.name}
											</Heading>
											<Heading size={'sm'} fontWeight='bold'>
												{moment(val?.appointmentDate).format(
													'MMMM Do YYYY, h:mm:ss a'
												)}
											</Heading>
											<Heading size={'xs'} fontWeight='bold'>
												{`${moment(val?.appointmentFromTime).format(
													'h:mm a'
												)} - ${moment(val?.appointmentFromTime)
													.add(1, 'hour')
													.format('h:mm a')}`}
											</Heading>
										</VStack>
									</Box>

									{/* </VStack> */}
								</HStack>
							)
					  })
					: null}
			</DetailCard>
		</Box>
	)
}

export default Appointments

const styles = StyleSheet.create({})
