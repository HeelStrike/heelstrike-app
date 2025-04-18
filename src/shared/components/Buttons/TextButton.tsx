import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
    StyleSheet,
    Pressable
} from 'react-native';

interface ButtonProps {
    title: string;
    pressBehaviour?: () => void;
}

const TextButton: React.FC<ButtonProps> = ({ title, pressBehaviour }) => {
    return (
        <View style={buttonContainer}>
            <Pressable
                onPress={pressBehaviour}
                style={({ pressed }) => ([
                    { opacity: pressed ? 0.5 : 1.0},
                ])}>
                <Text style={buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
}

const buttonContainer: ViewStyle = {
    flexDirection: 'row',
    maxWidth: 80,
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#1c3dff',
    alignContent: 'center',
    justifyContent: 'center',
};

const buttonText: TextStyle = {
    color: '#0051ff',
    fontSize: 11,
    alignContent: 'center',
    alignSelf: 'center',
};

export default TextButton;