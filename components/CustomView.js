import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomView = ({ children, style = {} }) => {
	return (
		<>
			<>
				<View style={[styles.root, style]}>{children}</View>
			</>
		</>
	)
}

export default CustomView

const styles = StyleSheet.create({
	root: {
		width: '100%',
		// flex: 1,
	},
})
