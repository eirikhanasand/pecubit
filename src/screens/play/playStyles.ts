import { Dimensions, StyleSheet } from 'react-native'

export const PlayStyles = StyleSheet.create({
    // Content of the play page
    content: {
        flex: 1,
        justifyContent: "center",
    },
    top: {
        paddingTop: Dimensions.get('window').height / 8.9,
    }
})
