import react, { useState } from "react";
import { Alert, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../components/input";
import Button from "../components/buttom";
import Label from "../components/label";




export default function Cadastro({navigation}){

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')

const Salvar = async ()=>{

    if(name ==="" ||email==="" || pass === "" ){

Alert.alert("Alerta!", "Favor preencher todos os campos!")

    }else{

try {
const dados = {name,email, pass}
const setDados = AsyncStorage.setItem("valor",JSON.stringify(dados))
Alert.alert("Cadastro","Cadastro realizado com Sucesso!")
navigation.replace("Login")


} catch (error) {

    console.log("ERRO"+ error)
    
}

}

}


    return(

        <ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>

<Label>{"NOME"}</Label>
<Input placeholder={"Digite seu Nome..."} placeholderTextColor={"black"} value={name} onChangeText={setName}/>
<Label>{"EMAIL"}</Label>
<Input placeholder={"Digite seu Email..."} placeholderTextColor={"black"} value={email} onChangeText={setEmail} keyboardType={"email-adress"}/>
<Label>{"SENHA"}</Label>
<Input placeholder={"Digite sua Senha..."} placeholderTextColor={"black"} value={pass} onChangeText={setPass} secureTextEntry={true} />

<Button text={"CADASTRAR"} onPress={Salvar}/>

        </ImageBackground>
    )
}