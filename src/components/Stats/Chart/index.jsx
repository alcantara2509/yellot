import { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import moment from "moment";
import { globalStyles } from "../../../styles/globalStyles";
import { styles } from "./styles";

const StatsChart = ({ data }) => {
  const [dataChart, setDataChart] = useState([]);
  const [reference, setReference] = useState(60);

  useEffect(() => {
    let newArray = [];

    data?.generation?.forEach((x, i) => {
      newArray.push({
        value: x,
        label:
          data?.data_type === "daily"
            ? moment(data?.x_labels[i]).format("DD/MM")
            : data?.data_type === "monthly"
            ? moment(data?.x_labels[i]).format("MM/YY")
            : moment(data?.x_labels[i]).format("YYYY"),
        spacing: 2,
      });

      if (i % 1 === 0) {
        newArray.push({
          value: data?.expected[i] || 0,
          spacing: 16,
          frontColor: globalStyles.colors.gray,
        });
      }
    });

    setReference(data?.expected?.[1]);
    setDataChart(newArray);
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
            <Text style={styles.subtitleText}>Geração Real</Text>
          </View>
          <View style={[globalStyles.flexRow, styles.subtitleContainer]}>
            <View style={styles.squareExpected}></View>
            <Text style={styles.subtitleText}>Geração Esperada</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatsChart;
