import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../../shared/components/Cards/Card';

const WorkoutScreen: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <Card title="Training Plan Progress">
                <Text>Week 1: Completed</Text>
                <Text>Week 2: In Progress</Text>
            </Card>

            <Card title="Upcoming Workouts">
                <Text>Monday: Leg Day</Text>
                <Text>Tuesday: Rest</Text>
            </Card>

            <Card title="Additional Card">
                <Text>Week 3</Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        padding: 24,
        flex: 1,
    },
});

export default WorkoutScreen;
