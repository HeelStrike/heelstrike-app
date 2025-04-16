import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutScreen from '@/src/features/workouts/screens/WorkoutScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Workouts">
            <Stack.Screen name="Workouts" component={WorkoutScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;