import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../../styles/globalStyles";

const PeriodButtons = ({ selectedPeriod, setSelectedPeriod, period, text }) => {
  return (
    <LinearGradient
      style={{
        width: 120,
        height: 30,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
      }}
      colors={[
        selectedPeriod === period ? "#6200D1" : globalStyles.colors.lightGray,
        selectedPeriod === period ? "#943B93" : globalStyles.colors.lightGray,
      ]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <TouchableOpacity
        onPress={() => setSelectedPeriod(period)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          height: 30,
          width: 120,
        }}
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
