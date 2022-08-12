import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./src/Cadastro";
import Login from "./src/Login";
import Produto from "./src/Produto";


const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator>              
              {/*<Stack.Screen name="Cadastro" component={Cadastro} />*/}
              {/*<Stack.Screen name="Login" component={Login} />*/}
              <Stack.Screen name="Produto" component={Produto} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
