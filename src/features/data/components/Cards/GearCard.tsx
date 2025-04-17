import React from 'react';
import {View, StyleSheet, ViewStyle, Text, Image, ImageStyle, TextStyle} from "react-native";
import Card from "@/src/shared/components/Cards/Card";
import SquareProgressBar from "@/src/shared/components/ProgressBars/RectangleProgressBar";

interface GearCardProps {
    gearName: string;
    gearType: string;
    gearDistance: [number, number];
}

const GearCard: React.FC<GearCardProps> = ({ gearName, gearType, gearDistance }) => {
    const [totalTravelled, maxDistance] = gearDistance;

    return (
        <Card title={gearName}>
            <Text>{gearType}</Text>
            <Image
                source={require('@/src/features/data/assets/example_shoe.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <View
                style={styles.progressContainer}
            >
                <SquareProgressBar progressFraction={0.5} totalSquares={8} />
                <Text style={styles.distanceText}>{gearDistance[0]} km / {gearDistance[1]} km</Text>
            </View>

        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 5,
    } as ImageStyle,
    progressContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 10,
    } as ViewStyle,
    distanceText: {
        paddingTop: 15,
    } as TextStyle,
});

export default GearCard