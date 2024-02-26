import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = ({ label, theme, onPress }) => {
    if (theme == "primary") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, { backgroundColor: "white", padding: 5 , borderWidth: 2 , borderColor: "gold", borderRadius: 10 }]} onPress={onPress}
                    onPressIn={() => alert('You pressed a button.')}
                >
                    <FontAwesome
                        size={18}
                        name="picture-o"
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[ styles.buttonLabel, { color: 'black'} ]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        padding: 3
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})

export default Button