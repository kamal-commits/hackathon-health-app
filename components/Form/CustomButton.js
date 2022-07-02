import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from 'native-base'
import { COLORS } from '../../utils/constants'

const CustomButton = ({ text }) => {
	return (
		<Button bg='primary.10' borderRadius='xl' margin={'25'}>
			<Text color='white' fontSize='lg'>
				{text}
			</Text>
		</Button>
	)
}

export default CustomButton

const styles = StyleSheet.create({})
