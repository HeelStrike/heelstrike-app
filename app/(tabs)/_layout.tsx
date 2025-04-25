import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
          <Tabs>
              <Tabs.Screen
                  name="index"
                  options={{
                      title: 'Maps',
                      tabBarIcon: ({ color, size }) => (
                          <Ionicons name="map-sharp" size={size} color={color} />
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

              <Tabs.Screen
                  name="record"
                  options={{
                      title: 'Record',
                      tabBarIcon: ({ color, size }) => (
                          <Ionicons name="stopwatch-outline" size={size} color={color} />
                      ),
                  }}
              />

              <Tabs.Screen
                  name="data"
                  options={{
                      title: 'Data',
                      tabBarIcon: ({ color, size }) => (
                          <Ionicons name="analytics-outline" size={size} color={color} />
                      ),
                  }}
              />

              <Tabs.Screen
                  name="nutrition"
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
