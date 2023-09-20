import { StyleSheet } from "react-native"

export const FooterStyles = StyleSheet.create({
    // Background of the footer
    content: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: 80,
        width: "100%",
        bottom: 0,
    },
    // Menu icon in footer
    menu: {
        width: 28,
        aspectRatio: 1/1.25,
        alignSelf: 'center',
        bottom: 8
    },
    
})
