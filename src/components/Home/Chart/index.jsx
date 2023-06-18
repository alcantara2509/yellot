import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";
import { useGetAll } from "../../../hooks/useGetData";
import { Text } from "react-native";

const HomeChart = () => {
  const [data, loading] = useGetAll("hourly");

  const handleXLabels = (items) => items?.map((e) => e.replace(/:[^:]*$/, ""));

  const dataChart = {
    labels: handleXLabels(data?.x_labels) || [],
    datasets: [
      {
        data: data?.generation || [1, 2, 3, 4],
      },
    ],
  };
  console.log(
    data?.x_labels?.length > 5
      ? data?.x_labels?.length % 2 == 0
        ? value
        : ""
      : null
  );
  return (
    <LineChart
      data={dataChart}
      width={Dimensions.get("window").width - 46}
      height={260}
      chartConfig={{
        backgroundGradientFrom: globalStyles.colors.background,
        backgroundGradientTo: globalStyles.colors.background,
        decimalPlaces: 0,
        color: () => globalStyles.colors.primary,
        labelColor: () => globalStyles.colors.mediumGray,
        style: {
          borderRadius: 17,
        },
      }}
      withDots={false}
      withShadow={false}
      withVerticalLines={false}
      verticalLabelRotation={45}
      hidePointsAtIndex={[]}
      bezier
      style={{
        marginTop: 60,
        marginBottom: 40,
        marginLeft: -30,
      }}
    />
  );
};

export default HomeChart;
