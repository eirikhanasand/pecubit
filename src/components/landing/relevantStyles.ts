import { StyleSheet, Dimensions } from "react-native"

export const RelevantStyles = StyleSheet.create({
    image: { // Relevant images
        width: "100%",
        height: "100%",
        borderRadius: 15,
        overflow: "hidden",
        left: 10,
    },
    title: { // Relevant title
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 8,
        left: 10
    },
    content: { // View containing images inside of relevant
        margin: 15,
        paddingBottom: 45,
        marginTop: 4
    },
    imageView: {
        width: Dimensions.get("window").width * 5.55 / 6.5,
        height: Dimensions.get("window").width * 5.6 / 6.5 * 0.6,
        marginRight: 10
    },
    imageText: {
        position: "absolute",
        color: "white",
        height: "100%",
        width: "100%",
        zIndex: 2,
        left: 10,
        textAlign: "center",
        lineHeight: Dimensions.get("window").height/4,
        fontWeight: "700",
        fontSize: 40
    },
    imageTextOpacity: {
        position: "absolute",
        backgroundColor: "black",
        opacity: 0.5,
        height: "100%",
        width: "100%",
        zIndex: 1,
        borderRadius: 15,
        overflow: "hidden",
        left: 10,
    },
})
