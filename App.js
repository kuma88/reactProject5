import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB.js";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

// const COLOURS = [
//   { red: 255, green: 128, blue: 0, id: "0" },
//   { red: 0, green: 128, blue: 255, id: "1" },
//   { red: 128, green: 0, blue: 255, id: "2" },
// ];

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 128, blue: 128, id: "0" },
    { red: 0, green: 128, blue: 255, id: "1" },
    { red: 128, green: 0, blue: 255, id: "2" },
  ]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function addColor(){
    setColorArray([...colorArray,
    {
      red: Math.floor(Math.random()* 256),
      green: Math.floor(Math.random()* 256),
      blue: Math.floor(Math.random()* 256),
      id: `${colorArray.length}`

    }])
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{height: 40, justifyContent:"center"}}
        onPress={addColor}>
          <Text style={{color:"red"}}>Add colour</Text>
      </TouchableOpacity>
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "flex-start",

 },
});

