import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import walp from "./assets/walp.jpeg"
import { BlurView } from "expo-blur";
import {REACT_APP_BE_SERVER} from "@env"
import LogIn from "./components/LogIn";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [user,setUser]=useState("0")
  console.log(user);
  console.log("JUHU THE TERMINAL");
  console.log(REACT_APP_BE_SERVER);
  return (
    <ImageBackground source={walp} style={styles.image}>
      <BlurView intensity={10} 
      style={{backgroundColor:'rgba(0, 0, 0, 0.3)',
      flexDirection: "row",
      alignItems:"flex-end",
      height:"8%"}}>
        <Text style={styles.transpBg}>DoTo</Text>
        <Button
          style={styles.transpBg}
          onPress = {()=>{setUser("0")}}
          title = "Log out"
          color = "white"
      />
      </BlurView>
      {user=="0"?<LogIn user={user} setUser={setUser} />:<ToDoList user={user} setUser={setUser} />}
      <BlurView intensity={10} style={{backgroundColor:'rgba(0, 0, 0, 0.3)',height:"5%",alignItems:"center"}}>
        <Text style={styles.transpBg}>Some more content in second Line</Text>
      </BlurView>
      <StatusBar />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "space-between"
  },
  transpBg:{
    flex:1,
    padding:"2%",
    fontSize:18,
    color:"white",
    // textAlign:"center",
    // // paddingVertical: 30,
    // alignItems:"center",
    // justifyContent:"center",
  }
});
