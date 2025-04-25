import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutScreen from '@/src/features/workouts/screens/WorkoutScreen';
import RecordScreen from "@/src/features/record/screens/RecordScreen";
import DataScreen from "@/src/features/data/screens/DataScreen";
import MapsScreen from "@/src/features/maps/screens/MapsScreen";
import NutritionScreen from "@/src/features/nutrition/screens/NutritionScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Data">
            <Stack.Screen name="Workouts" component={WorkoutScreen} />
            <Stack.Screen name="Record" component={RecordScreen} />
            <Stack.Screen name="Data" component={DataScreen} />
            <Stack.Screen name="Maps" component={MapsScreen} />
            <Stack.Screen name="Maps" component={NutritionScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;