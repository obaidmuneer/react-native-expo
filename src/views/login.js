import { StyleSheet, Text, View } from 'react-native';
import Anchor from '../components/anchor';
import Form from '../components/form';
import Input from '../components/input';
import Logo from '../components/logo';

export default function Login({ navigation, route }) {
    const handleSubmit = () => {
        alert('this is login screen')
    }
    return (
        <View style={styles.container} >
            <Logo />
            <Text >
                Login Form
            </Text>
            <View>
                <Form handleSubmit={handleSubmit} >
                    <Input label="Email :" />
                    <Input label={"Pass :"} otherInputProps={{
                        secureTextEntry: true
                    }} />
                </Form>
                <Anchor to={'signup'} title={'Signup'} navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
