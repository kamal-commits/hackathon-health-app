import { extendTheme, NativeBaseProvider, Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home";

export default function App() {
  const theme = extendTheme({
    // backgroundColor: 'green.100',
    colors: {
      // Add new color
      primary: {
        10: "#097969",
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
    components: {
      Text: {
        baseStyle: (props) => {
          const { colorScheme } = props;

          return {
            _light: {
              color: colorScheme[500],
            },
            _dark: {
              color: "amber.500",
            },
          };
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
