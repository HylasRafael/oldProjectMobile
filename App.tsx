import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./src/Cadastro";
import Login from "./src/Login";
import Produto from "./src/Produto";
import RecuperarSenha from "./src/RecuperarSenha"
import NovaSenha from "./src/NovaSenha";
import TelaLance from "./src/TelaLance";
import CadastroProduto from "./src/CadastroProduto";


const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Cadastro" component={Cadastro}/>             
              <Stack.Screen name="Produto" component={Produto} />
              <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
              <Stack.Screen name="NovaSenha" component={NovaSenha}/> 
              <Stack.Screen name="TelaLance" component={TelaLance}/>
              <Stack.Screen name="CadastroProduto" component={CadastroProduto}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export type StackParams = {
  
    Login: undefined,
    Cadastro: undefined,
    Produto: undefined,
    RecuperarSenha: undefined,
    NovaSenha: undefined,
    TelaLance: undefined, 
    CadastroProduto: undefined,
  };


export default App;
