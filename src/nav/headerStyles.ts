import { StyleSheet } from "react-native"

export const HeaderStyles = StyleSheet.create({
    menu: { // Menu icon in header
        width: 35,
        aspectRatio: 1/1,
        alignSelf: 'center',
        left: -20
    },
    logo: { // Text logo in header
        fontSize: 28,
        fontWeight: "700",
        marginLeft: "4%",
        justifyContent: 'center'
    },
    headerContent: { // Background of header
        position: "absolute",
        width: "100%",
        paddingTop: 50,
        height: 95,
        zIndex: 1,
        top: 0,
    },
    headerRow: { // Row to horizontally align content of the header
        flexDirection: "row", 
        justifyContent: "space-between",
    }
})
