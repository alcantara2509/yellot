import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { globalStyles } from "../../../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Banner = ({ data }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#6200D1", "#943B93"]}
      start={{ x: 0, y: 0.9 }}
      end={{ x: 0.9, y: 0.5 }}
    >
      <View>
        <Text style={{ color: globalStyles.colors.white }}>
          KWH Gerados Hoje
        </Text>
        <Text style={[styles.text, { color: globalStyles.colors.white }]}>
          {data?.totals?.kwh?.toFixed(1)}
        </Text>
      </View>
      {+data?.totals?.kwh > 0 ? (
        <MaterialCommunityIcons name="lightning-bolt" size={38} color="white" />
      ) : (
        <MaterialCommunityIcons name="close-thick" size={38} color="white" />
      )}
    </LinearGradient>
  );
};

export default Banner;
