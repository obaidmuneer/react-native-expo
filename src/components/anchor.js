import { Pressable, Text } from 'react-native';

export default function Anchor({ navigation, route, to, title }) {
    return (
        <Pressable
            onPress={() => navigation.navigate(to)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#ab47bc' : '#8e24aa',
                },
                {
                    alignSelf: 'flex-end',
                    padding: 5,
                    borderRadius: 2
                },
            ]}
        >
            <Text style={{ color: 'white' }} >
                {title}
            </Text>
        </Pressable>
    );
}

