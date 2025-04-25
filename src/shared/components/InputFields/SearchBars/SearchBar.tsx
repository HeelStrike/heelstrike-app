import React, {useState} from 'react';
import { Style } from "node:util";
import {
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
    StyleSheet
} from "react-native";

interface SearchBarProps extends TextInputProps {
    placeholder?: string;
    onSearch?: (text: string) => void;
    style?: ViewStyle;
    inputStyle?: TextStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 placeholder = 'Search...',
                                                 onSearch,
                                                 style,
                                                 inputStyle
}) => {

    const [query, setQuery] = useState('');

    const handleTextChange = (text: string) => {
        setQuery(text);

        if (onSearch) {
            onSearch(text);
        }
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                value={query}
                onChangeText={handleTextChange}
                autoCapitalize="none"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: '#ececec',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});


export default SearchBar;