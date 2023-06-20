import { SafeAreaView, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import StatsChart from "../../components/Stats/Chart";
import Totals from "../../components/Home/Totals";
import { useGetData } from "../../hooks/useGetData";
import Period from "../../components/Stats/Period";
import { useMyStore } from "../../store";
import Loading from "../../components/Loading";

const Stats = () => {
  const [selectedPeriod] = useMyStore();
  const [data, loading] = useGetData(selectedPeriod);

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading && <Loading />}
      <View>
        <Period />
        <StatsChart data={data} loading={loading} />
        <Totals data={data} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default Stats;
