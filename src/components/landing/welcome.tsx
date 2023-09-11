import { Text, View, useColorScheme } from "react-native";
import { WelcomeStyles } from "./welcomeStyles";
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

export default function Welcome() {
    const isDark = useColorScheme() === 'dark';
    const theme = isDark ? DarkTheme : LightTheme

    return(
        <View style={WelcomeStyles.viewTwo}>
            <Text style={{
                ...WelcomeStyles.textTwo, 
                color: theme.contrast, 
                backgroundColor: theme.green
            }}>
                SIGN UP
            </Text>
            <Text style={{
                ...WelcomeStyles.textTwo, 
                color: theme.contrast, 
                backgroundColor: theme.green
            }}>
                LOGIN
            </Text>
        </View>
    )
}