import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Splash from "./splash";
import Cadastro from "./cadastro";
import Login from "./login";
import Tarefas from "./tarefas";
import ListaTarefas from "./listatarefas";
import InserirTarefas from "./inserirtarefas";
import GetCrud from "./getcrud";
import InsertCrud from "./insertcrud";
import UpdateCrud from "./updatecrud";
import ImageUpload from "./imageupload";
import ImageView from "./imageview";


const Stack = createNativeStackNavigator();

export default function Navegar(){

    return(

       
            <Stack.Navigator initialRouteName="Splash" >
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
                <Stack.Screen name="Cadastro" component={Cadastro}  options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}} />
                <Stack.Screen name="Login" component={Login} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>
                <Stack.Screen name="Tarefas" component={Tarefas} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>
                <Stack.Screen name="InserirTarefas" component={InserirTarefas} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>
                <Stack.Screen name="ListaTarefas" component={ListaTarefas} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/> 
                 <Stack.Screen name="GetCrud" component={GetCrud} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>     
                 <Stack.Screen name="InsertCrud" component={InsertCrud} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>
                 <Stack.Screen name="UpdateCrud" component={UpdateCrud} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>
                 <Stack.Screen name="ImageUpload" component={ImageUpload} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>  
                 <Stack.Screen name="ImageView" component={ImageView} options={{headerRight:()=>(<Image source={require("../assets/image/splash.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>)}}/>           
            </Stack.Navigator>
        



    )
}