import { SafeAreaView, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Banner from "../../components/Home/Banner";
import HomeChart from "../../components/Home/Chart";
import Totals from "../../components/Home/Totals";
import { useGetAll } from "../../hooks/useGetData";
import Loading from "../../components/Loading";

const Home = () => {
  const [data, loading] = useGetAll("hourly");

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading && <Loading />}
      <View>
        <Banner data={data} loading={loading} />
        <HomeChart data={data} loading={loading} />
        <Totals data={data} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
