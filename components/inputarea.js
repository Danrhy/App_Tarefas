import react from "react";
import { TextInput, StyleSheet } from "react-native";



export default function InputArea({placeholder, placeholderTextColor,onChangeText,value,secureTextEntry,keyboardType,...rest}){
return(

<TextInput style={style.InputArea} placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />



)


}

const style = StyleSheet.create({

    InputArea:{

        width:"80%",
        height:200,
        borderWidth:5,
        borderColor:"black", 
        borderRadius:10, 
        backgroundColor:"#ffff", 
        textAlignVertical:"top",
        marginTop:10,
        

    }


})