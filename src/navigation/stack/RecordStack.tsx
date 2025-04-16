import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecordScreen from "@/src/features/record/screens/RecordScreen";

const Stack = createNativeStackNavigator();

export default function RecordStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Record"} component={RecordScreen} />
        </Stack.Navigator>
    );
}