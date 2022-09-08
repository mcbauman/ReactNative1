import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";

export default function LogInList(props){

    const [items,setItems]=useState([])

    function GetItems(){
        const header = { Authorization: `Bearer ${props.user}` };
        const data = {}
        axios.post(`${process.env.REACT_APP_BE_SERVER}/getItems`,data,{headers:header})
        .then(res=>{
            setItems(res.data)
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        GetItems();
    },[])

    return (
        <View>
            {items.length>0?items.map(element => {
                return <BlurView key={element._id} style={styles.listItem}>
                    <Text style={styles.textItem}>{element.itemName}</Text>
                    <Text style={styles.textItem}>{element.discription}</Text>
                </BlurView>
            }):<Text>Loading</Text>}
        </View>
    )
}

const styles=StyleSheet.create({
    listItem:{
        marginTop:"2%",
        padding:"2%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textItem:{
        fontSize:18,
        color:"white",
    }
})