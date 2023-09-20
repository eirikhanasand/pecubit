import { StyleSheet } from "react-native"

export const GameStyles = StyleSheet.create({
    viewTwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    viewThree: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textTwo: {
        width: "49%",
        height: 50,
        fontSize: 20,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 50,
        overflow: "hidden",
        fontWeight: "600",
    },
    textThree: {
        width: "32%",
        fontSize: 16,
        height: 50,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 50,
        overflow: "hidden",
        fontWeight: "700",
    }
})
