import { View, Text } from "react-native";
import Items from "./Items";
import { style } from "./styles";
import Percentage from "../../../../assets/icons/icon_percentage.png";
import Energy from "../../../../assets/icons/icon_energy.png";
import Cloud from "../../../../assets/icons/icon_cloud.png";
import Trees from "../../../../assets/icons/icon_trees.png";

const Totals = ({ data }) => {
  return (
    <View style={style.wrapper}>
      <Items
        tagline="Performance"
        data={data?.totals?.percentage}
        icon={Percentage}
      />
      <Items tagline="Total Kwh" data={data?.totals?.kwh} icon={Energy} />
      <Items tagline="CO2 evitado" data={data?.totals?.co2} icon={Cloud} />
      <Items tagline="Árvores salvas" data={data?.totals?.trees} icon={Trees} />
    </View>
  );
};

export default Totals;
