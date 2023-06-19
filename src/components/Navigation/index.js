import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Stats from "../../screens/Stats";
import Settings from "../../screens/Settings";
import { globalStyles } from "../../styles/globalStyles";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { primary, secondary, mediumGray } = globalStyles.colors;
  return (
    <Tab.Navigator
      initialRouteName="Geração"
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
            <View style={styles.tabContainer}>
              <Ionicons
                name="ios-stats-chart"
                size={26}
                color={focused ? primary : mediumGray}
              />
              <Text
                style={[styles.text, { color: focused ? primary : mediumGray }]}
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
            <View style={styles.gradientTabContainer}>
              <LinearGradient
                style={styles.gradientContainer}
                colors={[
                  focused ? primary : mediumGray,
                  focused ? secondary : mediumGray,
                ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <FontAwesome5 name="solar-panel" size={23} color="white" />
              </LinearGradient>
              <Text
                style={[
                  styles.text,
                  { color: focused ? primary : mediumGray, top: -23 },
                ]}
              >
                Geração
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Contato"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <MaterialIcons
                name="phone-in-talk"
                size={28}
                color={focused ? primary : mediumGray}
              />
              <Text
                style={[styles.text, { color: focused ? primary : mediumGray }]}
              >
                Contato
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
