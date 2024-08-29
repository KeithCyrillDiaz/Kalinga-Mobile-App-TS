import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {GuestHomePage} from '@/Pages';
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

export const ButtonTabComponent: React.FC = () => {
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        tabBarActiveTintColor: '#E60965',
        tabBarLabelStyle: {
          color: '#E60965',
          fontSize: 12,
        },
        tabBarStyle: {
          borderTopWidth: 2,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderTopColor: '#E60965',
          borderRightColor: '#E60965',
          borderLeftColor: '#E60965',
          height: 70,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#FFE0E8',
        },
            
        }}
        >
            <Tab.Screen name="Home" component={GuestHomePage} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons
                    name="explore"
                    size={focused ? 37 : 30}
                    color={focused ? '#E60965' : 'black'}
                    />
                )
            }}
            />
        </Tab.Navigator>
    )
}