import { StyleSheet, Text, View } from 'react-native';
import Anchor from '../components/anchor';
import Form from '../components/form';
import Input from '../components/input';
import Logo from '../components/logo';

export default function Signup({ navigation }) {
    const handleSubmit = () => {
        alert('did you just pressed submit btn?')
    }
    return (
        <View style={styles.container} >
            <Logo />
            <Text >
                Signup Form
            </Text>
            <View>
                <Form handleSubmit={handleSubmit} >
                    <Input label="Name:" />
                    <Input label="Email :" />
                    <Input label={"Pass :"} otherInputProps={{
                        secureTextEntry: true
                    }} />
                    <Input label={"Confirm Pass :"} otherInputProps={{
                        secureTextEntry: true
                    }} />
                </Form>
                <Anchor to={'login'} title={'Login'} navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
