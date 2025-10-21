import react, { useEffect, useState } from "react";
import { ImageBackground, Alert } from "react-native";
import api from "../server/api";
import Button from "../components/buttom";
import Input from "../components/input";

export default function InsertCrud(){

    
   
   
    return(

        

         <ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>


<Input placeholder={"Digite um Valor..."} />
<Input placeholder={"Digite um Valor..."}  />

    <Button text={"INSERIR"} />




</ImageBackground>
        


    )
}