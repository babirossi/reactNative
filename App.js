import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, Image, InteractionManager, StyleSheet, Text, View} from 'react-native';

export default function App() {
   const [count, setCount] = useState(0);

   const contador = () => {
     setCount(count + 1);

   }

  const removerContagem = () => {
    if (count > 0) {
      setCount(count - 1);
    }

  };
  return (
    <View style={styles.container}>
      <Image source={require("./assets/doce_de_leite_.png")} style={{width: 150, height: 150}} />
      <Text style={styles.tamanho}>Pão de mel com Doce de Leite</Text>
      <Button title={"Clique aqui"} onPress={() => alert("Vamos comparar um pão de mel?")}></Button>

      <Button title={"É bom?"} onPress={contador} ></Button>
      <Text style={styles.corL}>Clicou {count} vezes</Text>
      <Button title={"Remover Clique"} onPress={removerContagem}></Button>
      <StatusBar style="auto" backgroundColor={"violet"} translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcbdb',
    alignItems: 'center',
    justifyContent: 'center',
      gap: 10

  },
  tamanho: {
    fontSize: 23,
    color: "white"
  },
  corL: {
    color: "white"
  }
});