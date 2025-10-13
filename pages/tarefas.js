import react from "react";
//import { db } from "../config/config";
import { ImageBackground } from "react-native";
import Button from "../components/buttom";




export default function Tarefas({navigation}){



return(


<ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>
<Button text={"INSERIR TAREFAS"}  onPress={()=> navigation.navigate("InserirTarefas")}/>
<Button text={"LISTAR TAREFAS"}  onPress={()=> navigation.navigate("ListaTarefas")}/>
    <Button text={"TESTE GET"}  onPress={()=> navigation.navigate("GetCrud")}/>
         <Button text={"TESTE POST"}  onPress={()=> navigation.navigate("InsertCrud")}/>
            <Button text={"TESTE UPLOAD IMAGE"}  onPress={()=> navigation.navigate("ImageUpload")}/>
                <Button text={"VIEW IMAGE"}  onPress={()=> navigation.navigate("ImageView")}/>
</ImageBackground>
    

)
}