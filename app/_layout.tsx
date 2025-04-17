import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
      <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
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

      </Tabs>
  );
}
