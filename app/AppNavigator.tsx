import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutView from './features/workouts/screens/WorkoutView';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Workouts">
                <Stack.Screen name="Workouts" component={WorkoutView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;