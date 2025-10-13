import react from "react";
import { TextInput, StyleSheet } from "react-native";



export default function Input({placeholder, placeholderTextColor,onChangeText,value,secureTextEntry,keyboardType,...rest}){
return(

<TextInput style={style.input} placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />



)


}

const style = StyleSheet.create({

    input:{

        width:"80%",
        height:50,
        borderWidth:5,
        borderColor:"black", 
        borderRadius:10, 
        backgroundColor:"#ffff"      

    }


})