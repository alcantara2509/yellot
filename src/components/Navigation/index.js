import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Stats from "../../screens/Stats";
import Settings from "../../screens/Settings";
import { globalStyles } from "../../styles/globalStyles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            elevation: 0,
            paddingBottom: 30,
            height: 94,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Estatísticas"
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}
            >
              <Ionicons
                name="ios-stats-chart"
                size={26}
                color={
                  focused
                    ? globalStyles.colors.primary
                    : globalStyles.colors.mediumGray
                }
              />
              <Text
                style={{
                  fontWeight: 600,
                  color: focused
                    ? globalStyles.colors.primary
                    : globalStyles.colors.mediumGray,
                  fontSize: 13,
                }}
              >
                Estatísticas
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Geração"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <LinearGradient
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                  alignItems: "center",
                  justifyContent: "center",
                  top: -30,
                }}
                colors={[
                  focused ? "#6200D1" : globalStyles.colors.mediumGray,
                  focused ? "#943B93" : globalStyles.colors.mediumGray,
                ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <FontAwesome5 name="solar-panel" size={23} color="white" />
              </LinearGradient>
              <Text
                style={{
                  fontWeight: 600,
                  color: focused
                    ? globalStyles.colors.primary
                    : globalStyles.colors.mediumGray,
                  fontSize: 13,
                  top: -23,
                }}
              >
                Geração
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}
            >
              <Ionicons
                name="ios-settings-sharp"
                size={28}
                color={
                  focused
                    ? globalStyles.colors.primary
                    : globalStyles.colors.mediumGray
                }
              />
              <Text
                style={{
                  fontWeight: 600,
                  color: focused
                    ? globalStyles.colors.primary
                    : globalStyles.colors.mediumGray,
                  fontSize: 13,
                }}
              >
                Configurações
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
