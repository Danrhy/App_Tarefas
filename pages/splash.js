import react, {useEffect} from "react";
import { ActivityIndicator, Image, ImageBackground} from "react-native";
import Container from '../components/container';



export default function Splash({navigation}){



useEffect(()=>{

navigation.navigate("Splash");

const time = setTimeout(()=>{

    navigation.replace("Login")

},3000);

return()=>clearTimeout(time)


},[]);

return(


    
        <ImageBackground source={require("../assets/image/background.jpg")} style={{flex:1, justifyContent:"center", alignItems:"center", }} >
        
        <Image source={require("../assets/image/splash.png") } style={{width:"50%", borderRadius:30, height:250}}/>
        <ActivityIndicator size={"large"} color={"black"}/>

        </ImageBackground>
    

)
}