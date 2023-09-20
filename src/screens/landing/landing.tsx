import { SafeAreaView, useColorScheme, Text, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/defaultComps'
import Relevant from '@components/landing/relevant'
import { Section } from '@components/defaultComps'
import Welcome from '@components/landing/welcome'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import Games from '@components/landing/games'
import en from "@text/landing.json"
import Header from '@nav/header'
import Footer from '@nav/footer'
import { useState } from 'react'

export default function LandingScreen(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const [name, setName] = useState("")
    const [login, setLogin] = useState(false)

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <Header name={name} login={login}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Welcome setName={setName} login={login} setLogin={setLogin} />
                <Section title="PLAY">
                    <Text style={{color: theme.contrast}}>{en.play}</Text>
                </Section>
                <Games />
                <Relevant />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
