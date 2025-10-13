import react, { Children } from "react";
import { Text, StyleSheet } from "react-native";



export default function Label({children}){
return(

<Text style={style.label}>{children}</Text>



)


}

const style = StyleSheet.create({

    label:{

        color:"#000000",
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"stretch",
        marginLeft:45,
        padding:2,

    }


})