import { View, Text, Image } from "react-native";
import { styles } from "../styles";

const Cards = ({ tagline, data, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.tagline}>{tagline}</Text>
        <Text style={styles.number}>{data}</Text>
      </View>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

export default Cards;
