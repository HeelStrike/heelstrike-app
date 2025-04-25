// App.tsx
import React from 'react';
import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import NutritionTabs from "@/src/features/nutrition/navigation/NutritionTabs";

export default function NutritionScreen() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <NutritionTabs />
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}
