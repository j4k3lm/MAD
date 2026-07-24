import { View, Text, Image } from 'react-native';

export default function AboutMe() {
    return (
        <View
            style={{ alignItems: 'center', marginTop: 50, backgroundColor: 'black' }}>
            <Image
                source={require('../assets/profile.jpg')}
                style={{ width: 200, height: 200, borderRadius: 100 }}
            />

            <Text style={{ color: 'white', fontSize: 15 }}>Jake Lorence E. Meneses</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>ACT_2</Text>
            <br />
            <Text style={{ color: 'white', fontSize: 15 }}>
                Fun Fact: I love eating delicious food!</Text>
            <br />
            <Text style={{ color: 'white', fontSize: 15 }}>
                I have learned how to create simple mobile applications using React
                Native using expo but still having a hard time even it still basic. I
                also learned some command using Git. The laboratory activities helped me
                understand how React Native works while using this expo. I will continue
                practicing so I can improve bit by bit.
            </Text>
        </View>
    );
}
