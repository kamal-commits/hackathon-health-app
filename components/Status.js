import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'native-base'

const Status = ({ status }) => {
	return (
		<Text
			bg='primary.600'
			padding='2'
			color='white'
			borderRadius={10}
			fontWeight='bold'
		>
			{status}
		</Text>
	)
}

export default Status

const styles = StyleSheet.create({})
