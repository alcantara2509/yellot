import { Spinner } from "native-base";
import { View } from "react-native";
import { styles } from "./styles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Spinner color="white" size={70} />
    </View>
  );
};

export default Loading;
