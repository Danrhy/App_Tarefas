import react, { useEffect, useState } from "react";
import { ImageBackground, Alert } from "react-native";
import api from "../server/api";
import Button from "../components/buttom";
import Input from "../components/input";

export default function InsertCrud(){

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    const setDados = async ()=>{

        try {

        const dados = {nome, sobrenome}
        const isertDados = await api.post("user/",dados);

        Alert.alert("Sucesso!","Dados inseridos com sucesso!");
        setNome("");
        setSobrenome("");
            
        } catch (error) {
            
            console.error("Erro ao inserir dados", error);
        }
        


    }

   
   
    return(

        

         <ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>


<Input placeholder={"Digite um Valor..."} placeholderTextColor={"black"} value={nome} onChangeText={setNome}/>
<Input placeholder={"Digite um Valor..."} placeholderTextColor={"black"} value={sobrenome} onChangeText={setSobrenome} />

    <Button text={"INSERIR"} onPress={setDados} />




</ImageBackground>
        


    )
}