import React, { useEffect, useState } from "react";
import { Button,Text,TextInput, View } from "react-native"
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
        <View>
            <Text>{userName}</Text>
            <BlurView intensity={10} style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                <TextInput onChangeText={text=>setUserName(text)} 
                placeholder="Name"
                name="name" label="Name"></TextInput>
            </BlurView>
            <BlurView intensity={10} style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                <TextInput onChangeText={text=>setPassword(text)}
                placeholder="*****"
                name="password" label ="Password"></TextInput>
            </BlurView>
            <Button
            onPress = {LogIn}
            title = "Log In"
            color = "white"/>
        </View>
    )
}