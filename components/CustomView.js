import { Box, ScrollView, View } from 'native-base'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomView = ({ children, style = {} }) => {
	return (
		<Box flex={1} safeArea>
			<ScrollView
				_contentContainerStyle={{ flex: 1 }}
				flex={1}
				width={'full'}
				h={'full'}
			>
				<View style={[styles.root, style]}>{children}</View>
			</ScrollView>
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
