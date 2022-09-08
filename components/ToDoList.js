import React, { useEffect, useState } from "react";
import { Text, View, ListViews } from "react-native";
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
                return <View>
                    <Text>{element.itemName}</Text>
                    <Text>{element.discription}</Text>
                </View>
            }):<Text>Loading</Text>}
        </View>
    )
}