import { SafeAreaView, useColorScheme, Text, ScrollView } from 'react-native';
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/defaultComps';
import Relevant from '@components/landing/relevant';
import { Section } from '@components/defaultComps';
import Welcome from '@components/landing/welcome'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import Games from '@components/landing/games'
import en from "@text/landing.json"
import Header from '@nav/header';
import Footer from '@nav/footer';

export default function LandingScreen(): JSX.Element {
    const isDark = useColorScheme() === 'dark';
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Welcome />
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