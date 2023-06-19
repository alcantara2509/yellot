import { View, Text, Image } from "react-native";
import { style } from "../styles";

const Items = ({ tagline, data, icon }) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.tagline}>{tagline}</Text>
        <Text style={style.number}>
          {data}
          {tagline === "Performance" && "%"}
        </Text>
      </View>
      <Image source={icon} style={style.icon} />
    </View>
  );
};

export default Items;
