import { useColorScheme, View, Image } from 'react-native'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { FooterStyles } from './footerStyles'

export default function Footer(): JSX.Element {
    const isDark = useColorScheme() === 'dark';
    const theme = isDark ? DarkTheme : LightTheme
    const icons = {
        home:  require("@assets/house.png"),
        plus:  require("@assets/plus.png"),
        stats: require("@assets/stats.png"),
        menu:  require("@assets/menu.png"),
    }

    return (
        <View style={{...FooterStyles.content, backgroundColor: theme.darker}}>
            <Image style={FooterStyles.menu} source={icons.home}  />
            <Image style={FooterStyles.menu} source={icons.plus}  />
            <Image style={FooterStyles.menu} source={icons.stats} />
            <Image style={FooterStyles.menu} source={icons.menu}  />
        </View>
    )
}