import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../../styles/globalStyles";
import { styles } from "../styles";

const PeriodButtons = ({ selectedPeriod, setSelectedPeriod, period, text }) => {
  return (
    <LinearGradient
      style={styles.gradientContainer}
      colors={[
        selectedPeriod === period
          ? globalStyles.colors.primary
          : globalStyles.colors.lightGray,
        selectedPeriod === period
          ? globalStyles.colors.secondary
          : globalStyles.colors.lightGray,
      ]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <TouchableOpacity
        onPress={() => setSelectedPeriod(period)}
        style={styles.button}
      >
        <Text
          style={{
            color:
              selectedPeriod === period
                ? "white"
                : globalStyles.colors.mediumGray,
            fontWeight: 700,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default PeriodButtons;
