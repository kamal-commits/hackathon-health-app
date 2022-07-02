import { Box, ScrollView, View } from 'native-base'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomView = ({ children, style = {} }) => {
	return (
		<ScrollView>
			<View style={[styles.root, style]}>{children}</View>
		</ScrollView>
	)
}

export default CustomView

const styles = StyleSheet.create({
	root: {
		width: '100%',
		// flex: 1,
	},
})
