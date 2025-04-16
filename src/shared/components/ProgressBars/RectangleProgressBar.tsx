import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SquareProgressBarProps {
    progressFraction: number;
    totalSquares: number;
    rectangleWidth?: number;
    rectangleHeight?: number;
    spacing?: number;
}

const SquareProgressBar: React.FC<SquareProgressBarProps> = ({
    progressFraction,
    totalSquares,
    rectangleWidth = 34,
    rectangleHeight = 10,
    spacing = 4,
}) => {
    return (
        <View style={[styles.row, { columnGap: spacing }]}>
            {Array.from({ length: totalSquares }).map((_, index) => {
                const threshold = (index + 1) / totalSquares;
                const isFilled = progressFraction >= threshold;

                return isFilled ? (
                    <LinearGradient key={index}
                                    colors={['#72c400', '#3dc05d']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        width: rectangleWidth,
                                        height: rectangleHeight,
                                        borderRadius: 3,
                                    }}
                                    />
                ) : (
                    <View
                    key={index}
                    style={{
                        width: rectangleWidth,
                        height: rectangleHeight,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: 3,
                        }}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default SquareProgressBar;