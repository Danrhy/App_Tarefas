import react, { useEffect, useState } from "react";
import { ImageBackground, View, FlatList, Text, Pressable} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../server/servico";






export default function ListaTarefas({navigation}){

   const [dados, setDados] = useState([])

    const data = async ()=>{

    const resp = await getDocs(collection(db,"tasks"))

     const ArrayTarefas = resp.docs.map(doc =>({

     id:doc.data.id,
     task:doc.data().task,
     desc:doc.data().desc,

     })
     )

     setDados(ArrayTarefas)

    }

useEffect(()=>{

data();


},[])

    return(

        

         <ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>

<FlatList style={{width:"100%"}} 

data={dados}
keyExtractor={(item)=>item.id}
renderItem={({ item }) => (
          <View style={{ backgroundColor:"#ffff",padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.task}</Text>
            <Text>{item.desc}</Text>
          </View>
        )}



/>

</ImageBackground>
        


    )
}