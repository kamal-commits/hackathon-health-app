import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading } from 'native-base'

const CustomHeading = ({ heading }) => {
	return (
		<Heading color='primary.500' fontWeight='bold' margin={4} fontSize='4xl'>
			{' '}
			{heading} !
		</Heading>
	)
}

export default CustomHeading

const styles = StyleSheet.create({})
