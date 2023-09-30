import { Image, Text, Touchable, TouchableOpacity, View, useColorScheme } from "react-native"
import { HeaderStyles } from "@nav/headerStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { useNavigation, useRoute } from "@react-navigation/native"

type LandingHeaderProps = {
    name: string
    login: boolean
}

export default function LandingHeader({name, login}: LandingHeaderProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const ageLimit = require("@assets/18.png")
    const logo = require("@assets/pecubitnbg.png")
    const gobackLogo = require("@assets/goback777.png")
    const Name = name.length > 12 ? `${name.slice(0, 12)}...` : name

    // Get the navigation object
    const navigation = useNavigation()
        
    // Get the route object
    const route = useRoute()

    // Check if the active screen is nested
    function isNested(): boolean {

        // All nested routes will be added here as they are implemented
        switch (route.name) {
            case "LuckspinScreen": return true
        }

        return false
    }

    // Function to go back
    const goBack = () => {
        navigation.goBack()
    }

    // Allow the user to go back if they are inside a nested screen
    function GobackView() {
        return (
            <TouchableOpacity onPress={goBack}>
                <Image style={HeaderStyles.menuIcon} source={gobackLogo} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
                ...HeaderStyles.headerContent, 
                backgroundColor: theme.darker
            }}>
            <View style={HeaderStyles.headerRow}>
                {isNested() && <GobackView />}
                {!name.length || !login || !isNested()
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
                                Welcome, {Name}!
                            </Text>
                        </View>
                        <Image style={HeaderStyles.menuWithItems} source={ageLimit} />
                    </>
                }
            </View>
        </View>
    )
}
