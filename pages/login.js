import react, { useState } from "react";
import { Alert, ImageBackground, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/buttom";



export default function Login({navigation}){

const [email,setEmail] = useState("")
const [pass,setPass] = useState("")

    const Logar = async ()=>{

        try {

            const dados = await AsyncStorage.getItem("valor")
            const getDados = JSON.parse(dados)

            if(getDados.email === email && getDados.pass === pass){

                Alert.alert("Sucesso!", "Login realizado com Sucesso!")
                navigation.replace("Tarefas")
            
            }else{

                Alert.alert("ERRO!", "Usuário não Encontrado!")

            }
        } catch (error) {
            console.log("Erro"+ error)
        }


    }
  
    return(

       <ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>
       
       <Label>{"EMAIL"}</Label>
       <Input placeholder={"Digite seu Email..."} placeholderTextColor={"black"} value={email} onChangeText={setEmail}/>
       <Label>{"SENHA"}</Label>
       <Input placeholder={"Digite sua Senha..."} placeholderTextColor={"black"} value={pass} onChangeText={setPass} secureTextEntry={true} />       
       <Button text={"LOGAR"} onPress={Logar} />
       <Pressable onPress={()=>navigation.navigate("Cadastro")}>
<Label>Não Possui uma conta... Clique Aqui!</Label>

       </Pressable>
       
        </ImageBackground>

    )
}