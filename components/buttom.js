import react from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";



export default function Button({onPress, text}){
return(

<TouchableOpacity style={style.button} onPress={onPress} ><Text style={style.text}>{text}</Text></TouchableOpacity>



)


}

const style = StyleSheet.create({

    button:{

        width:"80%",
        height:50,
        borderWidth:5,
        borderColor:"black", 
        borderRadius:30,  
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        backgroundColor:"black"


    },
    text:{

        color:"white",
        fontSize:20,

    }


})