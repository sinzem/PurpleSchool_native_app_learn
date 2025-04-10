import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors, Radius } from "../tokens";


export function Input(props: TextInputProps & {isPassword?: boolean}) {
    
    return (
        <TextInput 
            style={styles.input}
            placeholderTextColor={Colors.gray}
            {...props}
        />
    )

}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: 16,
        // lineHeight: 1.2 (удалили - сломало верстку на android)
    }
})