import { Image, Text, View, useColorScheme } from "react-native"
import { HeaderStyles } from "@nav/headerStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

export default function LandingHeader(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const logo = require("@assets/18.png")

    return (
        <View style={{
                ...HeaderStyles.headerContent, 
                backgroundColor: theme.darker
            }}>
            <View style={HeaderStyles.headerRow}>
                <Text style={{ ...HeaderStyles.logo, color: theme.contrast }}>
                    Pecubit
                </Text>
                <Image style={HeaderStyles.menu} source={logo} />
            </View>
        </View>
    )
}
