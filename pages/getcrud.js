import react, { useEffect, useState, useCallback, UseFocusEffect} from "react";
import { ImageBackground, View, FlatList, Text, Alert } from "react-native";

import api from "../server/api";
import Button from "../components/buttom";
import { useFocusEffect } from "@react-navigation/native";
//import Button from "../components/buttom";

export default function GetCrud({navigation}){


    const [dados, setDados] = useState([]);

    const getDados = async ()=>{

        try {

             const getVal = await api.get("user/")
        setDados(getVal.data)
            
        } catch (error) {

            console.error("Erro ao buscar dados", error)
            
        }
    }

    useFocusEffect(
        
        useCallback(()=>{

            getDados();
        })      

    )


    


    const deletDados = async (id)=>{
        try {

            const delDados = await api.delete(`user/${id}`)
            Alert.alert("Sucesso", "Item deletado com Sucesso!")
            
        } catch (error) {

            console.error("Erro ao Deletar Item", error);
            
        }
    }

const renderItem = ({item})=>(
 <View style={{justifyContent:"center", alignItems:"center", width:"100%", backgroundColor: "orange", padding: 10, borderBottomWidth: 1, borderColor: "black", display:"flex", flexDirection:"row"}}>
            <View style={{flex:0.5, justifyContent:"center"}}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.nome}</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.sobrenome}</Text> 
            </View> 
            <View style={{flex:0.5,  justifyContent:"center", alignItems:"flex-end"}}>           
            <Button text={"ALTERAR"} onPress={()=>navigation.navigate("UpdateCrud",{item})}/>
            <Button text={"DELETAR"} onPress={()=>deletDados(item.id)}/> 
                 </View>         
</View>
)

const keyExtractor = (item)=>{
return item.id.toString();

}         

    return (

        <ImageBackground source={require("../assets/image/background.jpg")} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           

            <FlatList style={{width:"100%"}}
            data={dados}
            renderItem={renderItem}
            keyExtractor={keyExtractor}            
            
            />
        </ImageBackground>
    )
}