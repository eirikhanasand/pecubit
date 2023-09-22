import { SafeAreaView, useColorScheme, ScrollView } from 'react-native'
import { PlayStyles } from "@screens/play/playStyles"
import CustomStatusBar from '@components/defaultComps'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { ScreenProps } from "@interfaces"
import Header from '@nav/header'
import Footer from '@nav/footer'
import { useState } from 'react'

export default function PlayScreen({ navigation }: ScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <SafeAreaView style={{
            ...PlayStyles.content, 
            backgroundColor: theme.content
        }}>
        <CustomStatusBar />
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Content here */}
        </ScrollView>
    </SafeAreaView>
    )
}