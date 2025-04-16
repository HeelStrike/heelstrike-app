import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutScreen from "@/src/features/workouts/screens/WorkoutScreen";

const Stack = createNativeStackNavigator();

export default function WorkoutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Workout"} component={WorkoutScreen} />
        </Stack.Navigator>
    );
}