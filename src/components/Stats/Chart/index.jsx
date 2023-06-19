import { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { globalStyles } from "../../../styles/globalStyles";
import { styles } from "./styles";
import { handleDataArray } from "../../../utils/handleDataArray";

const StatsChart = ({ data }) => {
  const [dataChart, setDataChart] = useState([]);
  const [reference, setReference] = useState(60);

  useEffect(() => {
    handleDataArray({ data, setDataChart, setReference });
  }, [data]);

  return (
    <View>
      <View style={{ marginBottom: 40, marginLeft: -4 }}>
        <BarChart
          data={dataChart}
          showScrollIndicator={true}
          width={Dimensions.get("window").width - 100}
          xAxisColor={globalStyles.colors.mediumGray}
          initialSpacing={10}
          barWidth={16}
          height={220}
          yAxisThickness={0}
          topColor={"red"}
          frontColor={globalStyles.colors.primary}
          hideRules
          showReferenceLine1
          referenceLine1Position={reference / 2 || 60}
          referenceLine1Config={{
            color: globalStyles.colors.mediumGray,
            dashWidth: 4,
            dashGap: 5,
          }}
          yAxisTextStyle={{
            color: globalStyles.colors.mediumGray,
            fontSize: 12,
          }}
          xAxisLabelTextStyle={{
            color: globalStyles.colors.mediumGray,
            fontSize: 12,
            width: 100,
            marginLeft: 7,
          }}
        />
        <View style={globalStyles.flexRow}>
          <View style={[globalStyles.flexRow, styles.subtitleContainer]}>
            <View style={styles.squareReal}></View>
            <Text style={styles.subtitleText}>Produção Real</Text>
          </View>
          <View style={[globalStyles.flexRow, styles.subtitleContainer]}>
            <View style={styles.squareExpected}></View>
            <Text style={styles.subtitleText}>Produção Esperada</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatsChart;
