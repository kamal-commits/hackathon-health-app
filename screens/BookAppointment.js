import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../components/CustomView'
import DoctorProfileCard from '../components/Card/DoctorProfileCard'
import axios from 'axios'
import { VStack, Box, HStack, Pressable } from 'native-base'
import moment from 'moment'
import CustomButton from '../components/Form/CustomButton'
import { API } from '../utils/API'
import CustomSelect from '../components/Form/CustomSelect'
import AsyncStorage from '@react-native-async-storage/async-storage'
const DocDescription = ({ name, department }) => {
	return (
		<Box style={styles.docDescription}>
			<VStack space={3}>
				<Text style={styles.titleText}> About Doctor </Text>
				<Text style={styles.subtitleText}>
					{' '}
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially unchanged.
					It was popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop publishing
					software like Aldus PageMaker including versions of Lorem Ipsum.{' '}
				</Text>
			</VStack>
		</Box>
	)
}

const ScheduleAppointment = ({
	text = 'Schedule',
	array = [],
	state,
	setState,
	form,
	setForm,
}) => {
	return (
		<Box>
			<Box style={[styles.docDescription]}>
				<Text style={styles.titleText}> {text} </Text>
				<HStack justifyContent={'space-between'}>
					{array.map((val, i) => {
						return (
							<Pressable
								style={
									state === i ? [styles.dateBox, styles.activeTab] : styles.dateBox
								}
								onPress={() => {
									setState(i),
										setForm({
											...form,
											[text === 'Schedule'
												? 'appointmentDate'
												: 'appointmentFromTime']: val?.date,
										})
								}}
							>
								<VStack textAlign={'center'}>
									<Text
										style={
											state !== i
												? styles.subtitleText
												: [styles.subtitleText, { color: 'white' }]
										}
									>
										{val?.text}
									</Text>
									<Text
										style={
											state !== i
												? styles.titleText
												: [styles.titleText, { color: 'white' }]
										}
									>
										{val?.number}
									</Text>
								</VStack>
							</Pressable>
						)
					})}
				</HStack>
			</Box>
		</Box>
	)
}

const BookAppointment = () => {
	let dateArray = []
	let timeArray = []

	const [dateIndex, setDateIndex] = useState(0)
	const [timeIndex, setTimeIndex] = useState(0)
	const [form, setForm] = useState({
		appointmentDate: dateArray[0],
		appointmentFromTime: timeArray[0],
	})

	const [doctors, setDoctors] = useState([])
	console.log({ form })

	const handleAppointment = async () => {
		const token = await AsyncStorage.getItem('token')

		const { data } = await axios.post(
			API.BOOK_APPOINTMENT,
			{
				...form,
				appointmentToTime: moment(form?.appointmentFromTime)
					.add(1, 'hour')
					.toISOString(),
			},
			{
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			}
		)
	}

	const fetchDocs = async () => {
		const token = await AsyncStorage.getItem('token')

		const { data } = await axios.get(API.GET_ALL_DOCTORS, {
			headers: {
				Authorization: `Bearer ${JSON.parse(token)}`,
			},
		})
		console.log({ data })
		setDoctors(data?.data ?? [])
	}

	React.useEffect(() => {
		fetchDocs()
	}, [])

	React.useEffect(() => {
		if (dateIndex) {
			setTimeIndex(0)
			setForm({ ...form, appointmentFromTime: timeArray[0]?.date })
		}
	}, [dateIndex])

	for (let i = 0; i <= 3; i++) {
		let date = new Date(moment().add(i, 'day'))
		// console.log({ date })
		dateArray.push({
			number: date.getDate(),
			text: moment(date).format('dddd').slice(0, 3),
			date: date,
		})

		let timeDate = moment().add(i + 1, 'hour')
		timeArray.push({
			text: dateIndex === 0 ? timeDate.format('h:mm') : `${'1' + i - 1}`,
			number: dateIndex === 0 ? timeDate.format('a')?.toUpperCase() : 'PM',
			date: timeDate,
		})
	}

	let tempArray = doctors && doctors.filter((val) => form?.doctorId === val?._id)
	console.log({ tempArray })

	// doctor =

	return (
		<CustomView style={styles.root}>
			<Box marginBottom={'5'}>
				<CustomSelect
					label='Choose Doctor'
					options={doctors}
					fieldName='name'
					fieldValue='_id'
					value={form?.doctorId}
					form={form}
					setForm={setForm}
					name='doctorId'
				/>
			</Box>
			{form?.doctorId && tempArray.length > 0 && (
				<>
					<DoctorProfileCard
						name={tempArray[0]?.name}
						department={tempArray[0]?.department}
					/>
					<DocDescription />
					<ScheduleAppointment
						array={dateArray}
						state={dateIndex}
						setState={setDateIndex}
						form={form}
						setForm={setForm}
					/>
					<ScheduleAppointment
						text='Choose Time'
						array={timeArray}
						state={timeIndex}
						setState={setTimeIndex}
						form={form}
						setForm={setForm}
					/>
				</>
			)}

			{/* < */}
			<CustomButton text='Book Appointment' onPress={handleAppointment} />
		</CustomView>
	)
}

export default BookAppointment

const styles = StyleSheet.create({
	root: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	docDescription: {
		marginTop: 15,
	},
	titleText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	subtitleText: {
		fontSize: 16,
		// fontWeight: 'bold',
		lineHeight: 25.5,
	},
	dateBox: {
		backgroundColor: '#a6f5ec',
		height: 80,
		width: 80,
		borderRadius: 20,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		// color: 'black',
		marginTop: 10,
	},
	activeTab: {
		backgroundColor: 'purple',
		color: 'white',
	},
})
