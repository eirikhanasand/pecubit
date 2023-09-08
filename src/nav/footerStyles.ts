import { StyleSheet } from "react-native";

export const FooterStyles = StyleSheet.create({
    content: { // Background of the footer
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: 80,
        width: "100%",
        bottom: 0,
    },
    menu: { // Menu icon in footer
        width: 28,
        aspectRatio: 1/1.25,
        alignSelf: 'center',
        bottom: 8
    },
    
});