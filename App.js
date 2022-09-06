import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import walp from "./assets/walp.jpeg"
import { BlurView } from "expo-blur";
import {REACT_APP_BE_SERVER} from "@env"

export default function App() {
  console.log("JUHU THE TERMINAL");
  console.log(REACT_APP_BE_SERVER);
  return (
    <ImageBackground source={walp} style={styles.image}>
      <BlurView intensity={10} style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
        <Text style={styles.transpBg}>Some text inside</Text>
      </BlurView>
      <Text>Open up App.js to start working on your app!</Text>
      <BlurView intensity={10} style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
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
    fontSize:16,
    color:"white",
    textAlign:"center",
    paddingVertical: 36,
    alignItems:"center",
    justifyContent:"center",
  }
});
