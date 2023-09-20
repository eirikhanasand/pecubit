import { Image, ScrollView, Text, View, useColorScheme } from "react-native"
import { RelevantStyles } from "@components/landing/relevantStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

export default function Relevant(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    const images = {
        gambling: require("@assets/controller.jpg"),
        sports: require("@assets/soccer.jpg")
    }

    return (
        <View style={RelevantStyles.content}>
            <Text style={{...RelevantStyles.title, color: theme.contrast}}>
                RELEVANT
            </Text>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                <View style={RelevantStyles.imageView}>
                    <Text style={RelevantStyles.imageText}>SPORTS</Text>
                    <Text style={RelevantStyles.imageTextOpacity} />
                    <Image style={RelevantStyles.image} source={images.sports}/>
                </View>
                <View style={RelevantStyles.imageView}>
                    <Text style={RelevantStyles.imageText}>GAMBLING</Text>
                    <Text style={RelevantStyles.imageTextOpacity} />
                    <Image 
                        style={RelevantStyles.image} 
                        source={images.gambling}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
