import { Image, Text, View, useColorScheme } from "react-native"
import { HeaderStyles } from "@nav/headerStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

type LandingHeaderProps = {
    name: string
    login: boolean
}

export default function LandingHeader({name, login}: LandingHeaderProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const ageLimit = require("@assets/18.png")
    const logo = require("@assets/pecubitnbg.png")

    return (
        <View style={{
                ...HeaderStyles.headerContent, 
                backgroundColor: theme.darker
            }}>
            <View style={HeaderStyles.headerRow}>
                {!name.length || !login
                    ? <>
                        <Text style={{ ...HeaderStyles.logo, color: theme.contrast }}>
                            Pecubit
                        </Text>
                        <Image style={HeaderStyles.menu} source={ageLimit} />
                    </>
                    : <>
                        <View style={{flexDirection: "row"}}>
                            <Image style={HeaderStyles.menuIcon} source={logo} />
                            <Text style={{ ...HeaderStyles.logoWithItems, color: theme.contrast }}>
                                Welcome, {name}!
                            </Text>
                        </View>
                        <Image style={HeaderStyles.menuWithItems} source={ageLimit} />
                    </>
                }
            </View>
        </View>
    )
}
