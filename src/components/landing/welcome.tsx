import { Text, TextInput, TouchableOpacity, View, useColorScheme } from "react-native"
import { WelcomeStyles } from "./welcomeStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { useState } from "react"

type WelcomeProps = {
    setName: React.Dispatch<React.SetStateAction<string>>
    login: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

type SignupProps = {
    signup: boolean
    setSignup: React.Dispatch<React.SetStateAction<boolean>>
    theme: ThemeProps
    setName: React.Dispatch<React.SetStateAction<string>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

type LoginProps = {
    login: boolean
    loginComponent: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    theme: ThemeProps
    setName: React.Dispatch<React.SetStateAction<string>>
}

type DefaultScreenProps = {
    setSignup: React.Dispatch<React.SetStateAction<boolean>>
    changeLogin: () => void
    theme: ThemeProps
    loginComponent: boolean
    signup: boolean
    login: boolean
}

export default function Welcome({setName, login, setLogin}: WelcomeProps) {
    const [signup, setSignup] = useState(false)
    const [loginComponent, setLoginComponent] = useState(false)
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    function changeLogin () {
        setLoginComponent(!loginComponent)
    }

    return(
        <View style={login ? WelcomeStyles.viewTwoLogin : WelcomeStyles.viewTwo}>
            <DefaultScreen
                loginComponent={loginComponent}
                signup={signup}
                changeLogin={changeLogin} 
                setSignup={setSignup}
                theme={theme}
                login={login}
            />
            <Signup
                signup={signup}
                setSignup={setSignup}
                theme={theme}
                setName={setName}
                setLogin={setLogin}
            />
            <Login
                loginComponent={loginComponent}
                setLogin={setLogin} 
                theme={theme}
                setName={setName}
                login={login}
            />
        </View>
    )
}

function DefaultScreen({loginComponent, signup, changeLogin, setSignup, theme, 
login}: DefaultScreenProps) {

    if (signup || loginComponent || login) return <></>

    return (
        <View style={WelcomeStyles.spacedRow}>
            <TouchableOpacity 
                style={WelcomeStyles.textTwoTouchable} 
                onPress={() => {setSignup(true)}}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={WelcomeStyles.textTwoTouchable} 
                onPress={changeLogin}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}

function Signup({signup, setSignup, theme, setName, setLogin}: SignupProps) {
    
    const [password, setPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")

    const inputUsername = (val: string) => {
        setName(val)
    }

    const inputPassword = (val: string) => {
        setPassword(val)
    }

    const handleSignup = () => {
        setLogin(true)
        setSignup(false)
    }

    if (!signup) return <></>

    return (
        <View>
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {"Username"}
                placeholderTextColor={theme.card}
                textAlign="center"
                onChangeText={inputUsername}
                selectionColor={theme.green}
            />
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder={"Date of birth (DDMMYY)"}
                placeholderTextColor={theme.card}
                textAlign="center"
                inputMode="numeric"
                onChangeText={setBirthdate}
                maxLength={6}
                selectionColor={theme.green}
            />
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {"Password"}
                placeholderTextColor={theme.card}
                textAlign="center"
                secureTextEntry={true}
                onChangeText={inputPassword}
                selectionColor={theme.green}
            />
            <TouchableOpacity
                onPress={handleSignup}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
        </View>
    )
}

function Login({loginComponent, setLogin, theme, setName, login}: LoginProps): 
JSX.Element {

    const [password, setPassword] = useState("")

    const inputUsername = (val: string) => {
        setName(val)
    }

    const inputPassword = (val: string) => {
        setPassword(val)
    }

    if (!loginComponent || login) return <></>

    return (
        <View>
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {"Username"}
                placeholderTextColor={theme.card}
                textAlign="center"
                onChangeText={inputUsername}
                selectionColor={theme.green}
            />
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {"Password"}
                placeholderTextColor={theme.card}
                textAlign="center"
                secureTextEntry={true}
                onChangeText={inputPassword}
                selectionColor={theme.green}
            />
            <TouchableOpacity
                onPress={() => setLogin(true)}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    LOG IN
                </Text>
            </TouchableOpacity>
        </View>
    )
}