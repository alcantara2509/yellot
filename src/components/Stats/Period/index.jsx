import { View } from "react-native";
import { useMyStore } from "../../../store";
import { styles } from "./styles";
import PeriodButtons from "./Buttons";

const Period = () => {
  const [selectedPeriod, setSelectedPeriod] = useMyStore();

  return (
    <View style={styles.container}>
      <PeriodButtons
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        period={"daily"}
        text={"Dia"}
      />
      <PeriodButtons
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        period={"monthly"}
        text={"Mês"}
      />
      <PeriodButtons
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        period={"yearly"}
        text={"Ano"}
      />
    </View>
  );
};

export default Period;
