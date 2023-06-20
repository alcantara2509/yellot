import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { globalStyles } from "../../../styles/globalStyles";

export const handleXLabels = (items) =>
  items?.map((e) => e.replace(/:[^:]*$/, ""));

export const HomeCharts = ({ data }) => {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const newArray = data?.generation?.map((x, i) => {
      return {
        value: x,
        label: handleXLabels(data?.x_labels)[i],
      };
    });

    setDataChart(newArray);
  }, [data]);

  return (
    <View>
      <View style={{ marginBottom: 40, marginLeft: -4, marginTop: 50 }}>
        <LineChart
          data={dataChart}
          showScrollIndicator={true}
          width={Dimensions.get("window").width - 110}
          xAxisColor={globalStyles.colors.mediumGray}
          color1={globalStyles.colors.primary}
          initialSpacing={20}
          hideDataPoints
          thickness={4}
          height={190}
          yAxisThickness={0}
          topColor={"red"}
          spacing={38}
          curved
          yAxisTextStyle={{
            color: globalStyles.colors.mediumGray,
            fontSize: 12,
          }}
          xAxisLabelTextStyle={{
            color: globalStyles.colors.mediumGray,
            fontSize: 12,
            width: 40,
            marginLeft: 7,
          }}
        />
      </View>
    </View>
  );
};

export default HomeCharts;
