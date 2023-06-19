import { SafeAreaView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Cards from "./Cards";
import { Image } from "native-base";
import Phone from "../../../assets/icons/icon_phone.png";
import Location from "../../../assets/icons/icon_location.png";

export default function Home() {
  const data = {
    phone: "(62) 3638-1006",
    address1:
      "Av. Dep. Jamel Cecílio com Rua 14-A, 3455, Sala 2003 - Ed. Flamboyant Park Business, Jardim Goiás",
    address2: "SHCN CL, Qd. 305 Bloco C, nº 34 - 1º andar, Asa Norte",
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Image
        source={require("../../../assets/images/logo-yellot-light.png")}
        size={200}
        resizeMode="contain"
        alt="logo"
      />
      <Cards tagline="Telefone" data={data.phone} icon={Phone} />
      <Cards tagline="Goiânia" data={data.address1} icon={Location} />
      <Cards tagline="Brasilia" data={data.address2} icon={Location} />
    </SafeAreaView>
  );
}
