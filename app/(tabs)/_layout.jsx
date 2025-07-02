import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Colors } from '../../assets/colors';

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY,
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                backgroundColor: Colors.SECONDARY,
                height: 75,
                paddingTop: 10,
            },
            tabBarLabel: () => null, // Hide default label
        }}>

            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Ionicons name="home" size={24} color={color} />
                            <Text style={{ color, fontSize: 12, fontWeight: color === Colors.PRIMARY ? "bold" : "normal" }}>Feed</Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="Course"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Ionicons name="school-outline" size={24} color={color} />
                            <Text style={{ color, fontSize: 12, fontWeight: color === Colors.PRIMARY ? "bold" : "normal" }}>Course</Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="MyCourse"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
                            <Text classname style={{ color, fontSize: 12, fontWeight: color === Colors.PRIMARY ? "bold" : "normal" }}>MyCourses</Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Ionicons name="person-outline" size={24} color={color} />
                            <Text style={{ color, fontSize: 12, fontWeight: color === Colors.PRIMARY ? "bold" : "normal" }}>Profile</Text>
                        </View>
                    ),
                }}
            />

        </Tabs>
    );
};

export default _layout;
