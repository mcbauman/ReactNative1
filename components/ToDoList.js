import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView} from "react-native";
import { BlurView } from "expo-blur";
import axios from "axios";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

export default function LogInList(props){

    const [items,setItems]=useState([]);
    const [newTaksReload,setNewTaskReaload]=useState(0);

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
    useEffect(()=>{
        console.log("Reload Get Items");
        GetItems();
    },[newTaksReload])

    function removeItem(id,itemName,discription){
        const headers = { Authorization: `Bearer ${props.user}` };
        const data={id,itemName,discription}
        axios.delete(`${process.env.REACT_APP_BE_SERVER}/Item`,{headers:headers,data:data})
        .then(res=>{
            GetItems();
        })
        .catch(err=>console.log(err))
    }

    return (
        <ScrollView>
            {items.length>0?items.map(element => {
                return <BlurView key={element._id} style={styles.listItem}>
                    <Text style={styles.textItem}>{element.itemName}</Text>
                    <Text style={styles.textItem}>{element.discription}</Text>
                    <View>
                        <EditTask user={props.user} id={element._id}
                        reload={newTaksReload} setReload={setNewTaskReaload}/>
                        <Button
                        onPress={()=>removeItem(element._id,element.itemName,element.discription)}
                        title = "Delete"
                        color = "blue"/>
                    </View>
                </BlurView>
            }):<Text>Loading</Text>}
            <NewTask user={props.user} reload={newTaksReload} setReload={setNewTaskReaload}/>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    listItem:{
        margin:"2%",
        padding:"2%",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:10,
        overflow:"hidden"
    },
    textItem:{
        flex:1,
        fontSize:18,
        color:"white",
        flexWrap:"wrap"
    }
})