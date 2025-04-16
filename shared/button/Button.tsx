import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { Colors, Font, Radius } from "../tokens";


export function Button({text, ...props}: PressableProps & {text: string}) {

    return (
        <Pressable>
            <View  {...props} style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Radius.r10,
        height: 58,
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.white,
        fontSize: Font.f24,
    },
})