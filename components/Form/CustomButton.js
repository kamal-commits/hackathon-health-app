import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ArrowForwardIcon, Button, HStack, Text } from 'native-base'
import { COLORS } from '../../utils/constants'

const CustomButton = ({ text, onPress }) => {
	return (
		<Button bg='primary.10' borderRadius='xl' margin={'25'} onPress={onPress}>
			<HStack>
				<Text color='white' fontSize='lg'>
					{text}
				</Text>
				{/* <ArrowForwardIcon /> */}
			</HStack>
		</Button>
	)
}

export default CustomButton

const styles = StyleSheet.create({})
