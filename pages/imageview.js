import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList } from "react-native";
import api from "../server/api";


export default function ProfileScreen() {
  
  
  const [image, setImage] = useState([]);

const Buscar = async ()=>{

const response = await api.get("/user");
setImage(response.data)

};

useEffect(()=>{
  Buscar();
},[])


const renderItem = ({item})=>(

<View style={{ marginVertical: 10, alignItems: "center" }}>
  {item.foto_url && (
                <Image
                  source={{ uri: item.foto_url }}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                />
              )}
</View>

)
const keyExtractor = (item)=>{

  return item.id.toString();

}


  return(

    <FlatList
    
    data={image}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    
    
    />

  )
}
