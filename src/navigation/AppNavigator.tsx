import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutScreen from '@/src/features/workouts/screens/WorkoutScreen';
import RecordScreen from "@/src/features/record/screens/RecordScreen";
import DataScreen from "@/src/features/data/screens/DataScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Workouts">
            <Stack.Screen name="Workouts" component={WorkoutScreen} />
            <Stack.Screen name="Record" component={RecordScreen} />
            <Stack.Screen name="Data" component={DataScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;