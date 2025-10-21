import react, { useEffect, useState} from "react";
import { ImageBackground, View, FlatList, Text, Alert } from "react-native";
import api from "../server/api";
import Button from "../components/buttom";


export default function GetCrud(){


    


    return (

        <ImageBackground source={require("../assets/image/background.jpg")} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           

            
            <Text style={{ fontSize: 18, fontWeight: "bold" }}></Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}></Text>     
                  
            <Button text={"ALTERAR"} />
            <Button text={"DELETAR"} /> 
        </ImageBackground>
    )
}