import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";

export default function NewTask(props){
    const [show,setShow]=useState(false);
    const [itemName,setItemName]=useState("");
    const [discription, setDiscription]=useState("");

    function StoreNewTask(){
        if(itemName==""||discription==""){
            setShow(false)
        }else{
            const headers = { Authorization: `Bearer ${props.user}` };
            const data = {itemName:itemName,discription:discription}
            axios.post(`${process.env.REACT_APP_BE_SERVER}/Item`,data,{headers:headers})
            .then(res=>{
                props.setReload(props.reload+1)
                setItemName()
                setDiscription()
                setShow(false)
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <View>
            {show?
            <View>
                <BlurView intensity={10} style={Style.input}>
                    <TextInput placeholder="Name of the Task" onChangeText={text=>setItemName(text)} 
                    style={Style.text} placeholderTextColor="white"/>
                </BlurView>
                <BlurView intensity={10} style={Style.input}>
                    <TextInput placeholder="What to do?" onChangeText={text=>setDiscription(text)} 
                    style={Style.text} placeholderTextColor="white"/>
                </BlurView>
                <Button title={(itemName==""||discription=="")?"Abort":"Safe"} 
                onPress={StoreNewTask} style={Style.btn}/>
            </View>
            :<Button title="Add Task" onPress={()=>setShow(true)} style={Style.btn}/>}
        </View>
    )
}

const Style=StyleSheet.create({
    input:{
        fontSize:18,
        margin:"2%",
        padding:"2%",
        color:"white",
        borderColor:"white",
        borderWidth:1
    },
    text:{
        fontSize:18,
        color:"white",
        width:"100%",
    },
    btn:{
        color:"blue",
        borderColor:"blue",
        borderWidth:1
    }
})