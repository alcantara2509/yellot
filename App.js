import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/components/Navigation";
import { ContextProvider } from "./src/store";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <ContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ContextProvider>
    </NativeBaseProvider>
  );
}
