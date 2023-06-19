import { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { globalStyles } from "../../../styles/globalStyles";

const HomeCharts = ({ data }) => {
  const [dataChart, setDataChart] = useState([]);
  const [reference, setReference] = useState(60);

  const handleXLabels = (items) => items?.map((e) => e.replace(/:[^:]*$/, ""));

  useEffect(() => {
    let newArray = [];

    data?.generation?.forEach((x, i) => {
      newArray.push({
        value: x,
        label: handleXLabels(data?.x_labels)[i],
      });
    });

    setReference(data?.expected?.[1]);
    setDataChart(newArray);
    console.log(newArray);
  }, [data]);

  return (
    <View>
      <View style={{ marginBottom: 40, marginLeft: -4 }}>
        <LineChart
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
      </View>
    </View>
  );
};

export default HomeCharts;
