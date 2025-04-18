import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {Style} from "domelementtype";
import {Container} from "postcss";

interface CardProps {
    title: string;
    children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
   card: {
       backgroundColor: '#fff',
       padding: 16,
       borderRadius: 12,
       elevation: 4,
       marginVertical: '3%', // Remember, 3 * 2 is 6, must refactor this asap, use global margin %s.
       maxWidth: '100%',
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

export default Card;