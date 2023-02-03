import { StyleSheet, View, Button } from 'react-native';

export default function Form({ children, handleSubmit }) {
    return (
        <View style={styles.form}>
            {children}
            <View >
                <Button
                    onPress={handleSubmit}
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
    }
});
