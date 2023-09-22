// Theme colors available
type ThemeProps = {
    content: string
    card: string
    darker: string
    contrast: string
    green: string
}

// Screens available
type RootStackParamList = {
    LandingScreen: any
    PlayScreen: any
    StatsScreen: any
    MenuScreen: any
}

// Props for the Welcome component
type WelcomeProps = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    login: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}