import React from "react";
import { Button,Form,Input } from "react-native"
import {REACT_APP_BE_SERVER} from "@env"
import axios from "axios"

export default function LogIn(props){
    function LogIn(){
        axios.post(`${REACT_APP_BE_SERVER}/Login`,{name:"matthias",password:"aA@123456"})
        .then((res)=>{
            console.log(res.data);
            props.setUser(res.data);
        })
    }

    return (
        // <Form ref="form">
        //     <Input name="name" label="Name"></Input>
        //     <Input name="password" label ="Password"></Input>
            <Button
            onPress = {LogIn}
            title = "Log In"
            color = "white"
         />
        // </Form>
    )
}