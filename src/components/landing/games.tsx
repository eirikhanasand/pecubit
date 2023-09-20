import { GameStyles } from "@components/landing/gameStyles"
import { Text, View, useColorScheme } from "react-native"
import { Card } from "@components/defaultComps"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

type GamesProps = {
    titles: string[]
    theme: ThemeProps
}

export default function Games(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    
    return (
        <Card title="GAMES">
            <GameContent titles={["LOTTERY", "SPORT"]} theme={theme} />
            <GameContent titles={["FLAX", "GAMBLING", "ALL GAMES"]} theme={theme} />
        </Card>
    )
}

function GameContent({theme, titles}: GamesProps): JSX.Element {
    if (titles.length === 3) {
        return (
            <View style={GameStyles.viewThree}>
                {titles.map((title) => {
                    return (
                        <Text key={title} style={{
                            ...GameStyles.textThree, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {title}
                        </Text>
                    )
                })}
            </View>
        )
    } else {
        return (
            <View style={GameStyles.viewTwo}>
                {titles.map((title) => {
                    return (
                        <Text key={title} style={{
                            ...GameStyles.textTwo, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {title}
                        </Text>
                    )
                })}
            </View>
        )
    }
}