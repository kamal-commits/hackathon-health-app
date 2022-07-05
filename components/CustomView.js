import { Box, ScrollView, View } from 'native-base'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomView = ({ children, style = {}, scroll = false }) => {
	return (
		<Box safeArea={scroll ? false : true}>
			{scroll ? (
				<ScrollView>
					<Box style={[styles.root, style]}>{children}</Box>
				</ScrollView>
			) : (
				<Box style={[styles.root, style]}>{children}</Box>
			)}
			{/* <ScrollView
				// _contentContainerStyle={{ flex: 1 }}
				flex={1}
				// width={'full'}
				// h={'full'}
			> */}

			{/* </ScrollView> */}
		</Box>
	)
}

export default CustomView

const styles = StyleSheet.create({
	root: {
		width: '100%',
		// flex: 1,
	},
})
