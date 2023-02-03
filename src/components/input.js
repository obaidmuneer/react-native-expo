import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function Input({ label, otherInputProps, handleChange, handleValue }) {
    return (
            <View style={styles.inputContainer} >
                <Text style={styles.label} >{label}</Text>
                <TextInput
                    style={styles.input}
                    {...otherInputProps}
                    onChange={handleChange}
                    value={handleValue}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 5,
        borderWidth: 1,
        padding: 4,
        width: 250
    },
    label: {
        marginBottom: 3,
    },
    inputContainer: {
        padding: 5,
    },
});
