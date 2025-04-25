import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { enableScreens } from 'react-native-screens';

export default function Layout() {
  return (
      <Tabs>
          <Tabs.Screen
            name="maps/index"
            options={{
              title: 'Maps',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map-sharp" size={size} color={color} />
              ),
            }}
        />

          <Tabs.Screen
              name="workouts/index"
              options={{
                  title: 'Workouts',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="barbell-outline" size={size} color={color} />
                  ),
              }}
          />

          <Tabs.Screen
              name="record/index"
              options={{
                  title: 'Record',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="stopwatch-outline" size={size} color={color} />
                  ),
              }}
          />

          <Tabs.Screen
              name="data/index"
              options={{
                  title: 'Data',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="analytics-outline" size={size} color={color} />
                  ),
              }}
          />

          <Tabs.Screen
              name="nutrition/index"
              options={{
                  title: 'Nutrition',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="fast-food-outline" size={size} color={color} />
                  ),
              }}
              />
      </Tabs>
  );
}
