import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
    StyleSheet,
    Pressable
} from 'react-native';
import TextButton from "@/src/shared/components/Buttons/TextButton";

interface MapsButtonMenuProps {
    children?: React.ReactNode;
}

const MapsButtonMenu: React.FC<MapsButtonMenuProps> = ({ children }) => {
    return (
        <View style={buttonSpan}>
            <TextButton title={"My Routes"}/>
            <TextButton title={"Length"} />
            <TextButton title={"Surface"} />
            <TextButton title={"Elevation"} />
            <TextButton title={"Difficulty"} />
        </View>
    );
}

const buttonSpan: ViewStyle = {
    flexDirection: 'row',
};

export default MapsButtonMenu;