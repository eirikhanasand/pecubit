import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from "@react-navigation/native"
import LandingScreen from '@screens/landing/landing'
import StatsScreen from '@screens/stats/stats'
import { useColorScheme } from "react-native"
import MenuScreen from '@screens/menu/menu'
import PlayScreen from '@screens/play/play'
import { TabOptions } from '@interfaces'
import Footer from "@nav/footer"
import { useState } from 'react'
import Header from '@nav/header'
import React from "react"

type TabProps = {
    name: string
    component: React.FC<any>
    focusedIcon: any
    icon: any
}

const Tab = createBottomTabNavigator()

export default function Navigator(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const [name, setName] = useState("")
    const [login, setLogin] = useState(false)
    
    const screens = [
        {
            name: "LandingScreen",
            component: LandingScreen,
            focusedIcon: require("@assets/house-green.png"),
            icon: isDark
                ? require("@assets/house.png")
                : require("@assets/house.png")
        },
        {
            name: "PlayScreen",
            component: PlayScreen,
            focusedIcon: require("@assets/plus-green.png"),
            icon: isDark
                ? require("@assets/plus.png")
                : require("@assets/plus.png")
        },
        {
            name: "StatsScreen",
            login: login,
            component: StatsScreen,
            focusedIcon: require("@assets/stats-green.png"),
            icon: isDark
                ? require("@assets/stats.png")
                : require("@assets/stats.png")
        },
        {
            name: "MenuScreen",
            login: login,
            component: MenuScreen,
            focusedIcon: require("@assets/menu-green.png"),
            icon: isDark
                ? require("@assets/menu.png")
                : require("@assets/menu.png")
        }
    ]

    // <Header name={name} login={login}/>

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={screens[0].name}
                backBehavior="history"
                screenOptions={({
                    headerShown: true,
                    header: () => <Header name={name} login={login}/>,
                })}
                tabBar={props => <Footer 
                    state={props.state} 
                    descriptors={props.descriptors} 
                    navigation={props.navigation} 
                    insets={props.insets} 
                />}
            >
                {screens.map((screen: TabProps) => {
                    return (
                        <Tab.Screen 
                            key={screen.name} 
                            options={({
                                display: true,
                                focusedIcon: screen.focusedIcon,
                                icon: screen.icon,
                                name: name,
                                login: login,
                                setName: setName,
                                setLogin: setLogin
                            }) as TabOptions}
                            name={screen.name}
                            children={(props) => 
                                <screen.component 
                                    {...props} 
                                    name={name}
                                    setName={setName}
                                    login={login} 
                                    setLogin={setLogin} 
                                />
                            }
                        />
                    )
                })}
            </Tab.Navigator>
        </NavigationContainer>
    )
}