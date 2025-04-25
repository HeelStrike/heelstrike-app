import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CardProps {
    title: string;
    children: React.ReactNode;
}

const CardSmall: React.FC<CardProps> = ({ title, children }) => {
    return (
        <View style={styles.cardSmall}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardSmall: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        maxWidth: '47%',
        minWidth: '47%',
        minHeight: 160,
        marginVertical: '3%',
        borderWidth: 1,
        borderColor: '#ececec',
    } as ViewStyle,
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    } as TextStyle,
    content: {
        flexDirection: 'column',
    } as ViewStyle,
});

export default CardSmall;