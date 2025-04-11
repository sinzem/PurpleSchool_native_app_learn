import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Radius } from "../tokens";
import { useState } from "react";
import EyeOpenIcon from "../../assets/icons/eye-open";
import EyeClosedIcon from "../../assets/icons/eye-closed";


export function Input({isPassword, ...props}: TextInputProps & {isPassword?: boolean}) {
    
    const [isPasswordVisible, setIspasswordVisible] = useState<boolean>(true);

    return (
        <View>
            <TextInput 
                style={styles.input}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholderTextColor={Colors.gray}
                {...props}
            />
            {isPassword && 
                <Pressable 
                    style={styles.eyeIcon}
                    onPress={() => setIspasswordVisible(state => !state)}
                >
                {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </Pressable>

            }
        </View>
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
        color: Colors.gray,
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
})