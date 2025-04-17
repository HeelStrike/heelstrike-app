import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Card from "@/src/shared/components/Cards/Card";
import GearCard from "@/src/features/data/components/Cards/GearCard";
import CardSmall from "@/src/shared/components/Cards/CardSmall";

const DataScreen: React.FC = () => {
    return (
        <ScrollView style={style.scrollView}>
            <GearCard
                gearDistance={[10, 500]}
                gearName={"Giga Shoes"}
                gearType={"Road Race Trainers"}
            />
            <View style={style.rowContainer}>
                <CardSmall title={"Calories"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
                <CardSmall title={"Sleep"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
            </View>

            <View style={style.rowContainer}>
                <CardSmall title={"Heart Rate"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
                <CardSmall title={"Body Battery"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
            </View>

            <Card title={"Activity"}>
                <Text>Big Content Block</Text>
            </Card>

            <View style={style.rowContainer}>
                <CardSmall title={"Hydration"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
                <CardSmall title={"Injuries"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
            </View>

            <Card title={"Medication"}>
                <Text>Big Content Block</Text>
            </Card>

            <View style={style.rowContainer}>
                <CardSmall title={"Steps"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
                <CardSmall title={"VO2 Max"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
            </View>

            <View style={style.rowContainer}>
                <CardSmall title={"Fitness"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
                <CardSmall title={"Nutrition"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
            </View>

            <Card title={"Gait Analysis"}>
                <Text>Big Content Block</Text>
            </Card>

            <Card title={"Form Analysis"}>
                <Text>Big Content Block</Text>
            </Card>

            <View style={style.rowContainer}>
                <CardSmall title={"Menstration?"}>
                    <Text>Not sure if feature needed yet.</Text>
                </CardSmall>
                <CardSmall title={"Headphone Safety"}>
                    <Text>Small Content Block</Text>
                </CardSmall>
            </View>

            <Card title={"Medication"}>
                <Text>Big Content Block</Text>
            </Card>

        </ScrollView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6%',
    },
});

export default DataScreen;