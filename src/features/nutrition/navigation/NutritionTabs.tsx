import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MealPlansScreen from "@/src/features/nutrition/screens/MealPlansScreen";
import DietCalendarScreen from "@/src/features/nutrition/screens/DietCalendarScreen";
import ShoppingListScreen from "@/src/features/nutrition/screens/ShoppingListScreen";
import { NutritionTabParamList} from "@/src/shared/types/navigation";

const Tab = createMaterialTopTabNavigator<NutritionTabParamList>();

export default function NutritionTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIndicatorStyle: { backgroundColor: '#000', height: 2 },
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#777',
            tabBarStyle: { backgroundColor: '#fff' },
        }}
        >
            <Tab.Screen name="Diet Calendar" component={DietCalendarScreen} />
            <Tab.Screen name="Meal Plans" component={MealPlansScreen} />
            <Tab.Screen name="Shopping Lists" component={ShoppingListScreen} />
            
        </Tab.Navigator>
    );
}