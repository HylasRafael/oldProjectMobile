import React from "react";
import CadastroScreen from "./src/Cadastro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./src/Cadastro";
import Login from "./src/Login";


const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator>              
              {/*<Stack.Screen name="Cadastro" component={Cadastro} />*/}
              <Stack.Screen name="Login" component={Login} />                       
          </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
