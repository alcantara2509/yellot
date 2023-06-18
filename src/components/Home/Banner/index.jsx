import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./style";
import { globalStyles } from "../../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Banner = () => {
  return (
    <LinearGradient
      style={style.container}
      colors={["#6200D1", "#943B93"]}
      start={{ x: 0, y: 0.9 }}
      end={{ x: 0.9, y: 0.5 }}
    >
      <View>
        <Text style={{ color: globalStyles.colors.white }}>
          KWH Gerados Hoje
        </Text>
        <Text
          style={{
            color: globalStyles.colors.white,
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          38592.3
        </Text>
      </View>
      <MaterialCommunityIcons name="lightning-bolt" size={38} color="white" />
    </LinearGradient>
  );
};

export default Banner;
