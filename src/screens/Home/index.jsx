import { Text, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Banner from "../../components/Home/Banner";
import HomeChart from "../../components/Home/Chart";

export default function Home() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Banner />
        <HomeChart />
      </View>
    </SafeAreaView>
  );
}
