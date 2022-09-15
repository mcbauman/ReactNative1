import React, { useEffect, useState } from "react";
import { Button,Text,TextInput, View, StyleSheet } from "react-native"
import {REACT_APP_BE_SERVER} from "@env"
import axios from "axios";
import { BlurView } from "expo-blur";

export default function LogIn(props){
    const [userName,setUserName]=useState("UserName");
    const [password, setPassword]=useState("");

    function LogIn(){
        axios.post(`${REACT_APP_BE_SERVER}/Login`,{name:userName,password:password})
        .then((res)=>{
            console.log("Res.Data",res.data);
            props.setUser(res.data);
            console.log(userName);
        })
    }

    return (
        <View style={St.wrapper}>
            <BlurView intensity={10}  style={[St.line,St.dark]}>
                <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={text=>setUserName(text)} 
                placeholder="Name"
                placeholderTextColor="white"
                padding="2%"
                color="white"
                fontSize="18"
                name="name" label="Name"></TextInput>
            </BlurView>
            <BlurView intensity={10} style={[St.line,St.dark]}>
                <TextInput onChangeText={text=>setPassword(text)}
                placeholder="*****"
                placeholderTextColor="white"
                padding="2%"
                color="white"
                fontSize="18"
                secureTextEntry={true}
                style={{borderRadius:10}}
                name="password" label ="Password"></TextInput>
            </BlurView>
            <Button
            style={St.line}
            onPress = {LogIn}
            title = "Log In"
            color = "white"/>
        </View>
    )
}

const St=StyleSheet.create({
    wrapper:{

    },
    line:{
        width:"98%",
        margin:"2%",
        padding:"2%",
        fontSize:18,
        color:"white",
        overflow:"hidden",
        borderRadius:10,
        // justifyContent:"center",
        alignItems:"center"
    },
    dark:{
        backgroundColor:'rgba(0, 0, 0, 0.3)',
        borderWidth:1,
        borderRadius:10
    }
})

// style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}