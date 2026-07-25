import { View, Text, Image, ScrollView, TextInput } from 'react-native';

export default function HelloWorldDemo() {
    return (
        <ScrollView>
            <Text> Hello! </Text>

            <View>
                <Text>This is Blue Cat!</Text>

                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>

            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="You can type in me"
            />
        </ScrollView>
    );
}
