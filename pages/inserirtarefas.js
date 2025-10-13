import react, { useState } from "react";
import { Alert, ImageBackground } from "react-native";
import Input from "../components/input";
import InputArea from "../components/inputarea";
import Button from "../components/buttom";
import Label from "../components/label";
import { collection, addDoc} from "firebase/firestore";
import { db } from "../server/servico";



export default function InserirTarefas({navigation}){

    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("")

    // Inserir tarefa
const addTask = async (task, desc) => {

  if(task === "" || desc === ""){

Alert.alert("ERRO", "Favor preencher todos os Campos!")


  }else{

  try {
    await addDoc(collection(db, "tasks"), {
      task,
      desc,
      concluida: false,
      criadoEm: new Date()
    });

Alert.alert("Sucesso!", "Tarefa Cadastrada com Sucesso!");

setTask("");
setDesc("");

navigation.navigate("ListaTarefas")



  } catch (e) {
    console.error("Erro ao adicionar tarefa: ", e);
  }
};
}



    return(

<ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center",alignItems:"center"}}>
<Input placeholder={"Título da Tarefa..."} value={task} onChangeText={setTask}/>
<InputArea placeholder={"Descrição..."} value={desc} onChangeText={setDesc}/>
<Button text={"SALVAR"} onPress={()=>addTask(task,desc)}/>
  <Button text={"Carregar Imagem"} onPress={Abir} />
  <Label>to aqui</Label>
</ImageBackground>

    )
}