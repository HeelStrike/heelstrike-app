import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapsScreen from "@/src/features/maps/screens/MapsScreen";

const Stack = createNativeStackNavigator();

export default function MapsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Maps"} component={MapsScreen} />
        </Stack.Navigator>
    );
}