import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import WorkoutStack from "@/src/navigation/stack/WorkoutStack";
import {Tabs} from "expo-router";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tabs
            <Tabs.Screen
                name="workouts"
                options={{
                    title: 'Workouts',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="barbell-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="workouts"
                options={{
                    title: 'Workouts',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="barbell-outline" size={size} color={color} />
                    ),
                }}
            />
        />
    );
}