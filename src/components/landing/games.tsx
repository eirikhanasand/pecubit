import { GameStyles } from "@components/landing/gameStyles"
import { Text, View, useColorScheme } from "react-native"
import { Card } from "@components/defaultComps"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

export default function Games(): JSX.Element {
    const isDark = useColorScheme() === 'dark';
    const theme = isDark ? DarkTheme : LightTheme
    
    return (
        <Card title="GAMES">
            <View style={GameStyles.viewTwo}>
                <Text style={{...GameStyles.textTwo, color: theme.contrast, backgroundColor: theme.green}}>LOTTERY</Text>
                <Text style={{...GameStyles.textTwo, color: theme.contrast, backgroundColor: theme.green}}>SPORT</Text>
            </View>
            <View style={GameStyles.viewThree}>
                <Text style={{...GameStyles.textThree, color: theme.contrast, backgroundColor: theme.green}}>FLAX</Text>
                <Text style={{...GameStyles.textThree, color: theme.contrast, backgroundColor: theme.green}}>GAMBLING</Text>
                <Text style={{...GameStyles.textThree, color: theme.contrast, backgroundColor: theme.green}}>ALL GAMES</Text>
            </View>
        </Card>
    )
}