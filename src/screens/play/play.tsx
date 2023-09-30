import { SafeAreaView, useColorScheme, ScrollView } from 'react-native'
import { PlayStyles } from "@screens/play/playStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { PlayScreenProps } from "@interfaces"
import Play from '@components/play/play'

export default function PlayScreen({ route, navigation }: PlayScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const { category } = route.params

    return (
        <SafeAreaView style={{
            ...PlayStyles.content, 
            backgroundColor: theme.content
        }}>
            <CustomStatusBar />
            <ScrollView style={PlayStyles.top} showsVerticalScrollIndicator={false}>
                <Play navigation={navigation} category={category} />
            </ScrollView>
        </SafeAreaView>
    )
}
